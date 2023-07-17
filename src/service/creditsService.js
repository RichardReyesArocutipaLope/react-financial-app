import moment from "moment/moment"
import { financialApi } from "../api"

export const creditsGetRequest = async (dataFilter, parameters) => {

    const filter = {
        search_value: dataFilter.searchValue,
        state: dataFilter.state,
        date_range_first: dataFilter.dateRangeFirst,
        date_range_last: dataFilter.dateRangeLast,
        money_range_first: dataFilter.moneyRangeFirst,
        money_range_last: dataFilter.moneyRangeLast,
        id_analista: dataFilter.idAnalista,
        id_cobrador: dataFilter.idCobrador,
    }

    const token = localStorage.getItem('token') || ''

    try {
        const { data } = await financialApi.post('/credits/credit/filter', filter, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            params: {
                limit: parameters.limit,
                offset: parameters.offset,
            },
        })

        const adaptedCredits = []
        data.credits?.forEach(credit => {
            let newEstado
            switch (credit.estado) {
                case 'NU': newEstado = 'Nuevo'; break;
                case 'RE': newEstado = 'Renovado'; break;
                case 'AP': newEstado = 'Aprobado'; break;
                case 'DE': newEstado = 'Desembolsado'; break;
                case 'RC': newEstado = 'Rechazado'; break;
            }
            adaptedCredits.push({
                id: credit.id_credit,
                data: [
                    credit.cliente,
                    credit.dni,
                    credit.prestamo,
                    newEstado,
                    credit.plazo,
                    credit.credit_interest_rate,
                    credit.analista,
                    credit.cobrador,
                ]
            })
        });

        return {
            ok: true,
            numberOfCredits: data.countCredits,
            credits: adaptedCredits,
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const creditCreateRequest = async (data) => {

    const creditBody = {
        requested_money: +data.pres_solicitado,
        approved_money: +data.pres_aprobado,
        date_of_issue: moment().format('YYYY-MM-DD HH:mm:ss'),
        disbursement_date: null,
        period: +data.pres_plazo,
        interest_rate: +data.pres_tasa,
        state: 'NU',
        observation: null,
        fk_employee_cobrador: +data.cobrador,
        fk_employee_analista: +data.analista,
        fk_financial_interest: +data.pres_interes,
        fk_period_type: +data.pres_tipo_plazo,
        aval: [
            {
                dni: +data.aval1_dni,
                first_name: data.aval1_nombres,
                last_name: data.aval1_apellidos,
                phone: data.aval1_celular1,
                email: data.aval1_correo,
                address: data.aval1_domicilio,
            },
            {
                dni: +data.aval2_dni,
                first_name: data.aval2_nombres,
                last_name: data.aval2_apellidos,
                phone: data.aval2_celular1,
                email: data.aval2_correo,
                address: data.aval2_domicilio
            }
        ],
        personalReference: [
            {
                dni: +data.ref1_dni,
                first_name: data.ref1_nombres,
                last_name: data.ref1_apellidos,
                phone: data.ref1_celular1,
                email: data.ref1_correo,
                address: data.ref1_domicilio,
                relationship: data.ref1_parentesco
            },
            {
                dni: +data.ref2_dni,
                first_name: data.ref2_nombres,
                last_name: data.ref2_apellidos,
                phone: data.ref2_celular1,
                email: data.ref2_correo,
                address: data.ref2_domicilio,
                relationship: data.ref2_parentesco
            }
        ],
        customer: {
            dni: +data.dni_cliente,
            first_name: data.cli_nombre,
            last_name: data.cli_apellidos,
            phone: data.cli_celular1,
            phone2: data.cli_celular2,
            email: data.cli_correo,
            address: data.cli_domicilio,
            address_reference: data.cli_ref_domicilio,
            has_electricity_bill: data.recibo_luz,
            is_over_21: data.mayor_21,
            have_valid_dni: data.dni_vigente,
            have_property_documents: data.doc_vivienda,
            observation: data.clie_obs,
            fk_civil_status: +data.cli_estado_civil,
            fk_housing_type: +data.cli_vivienda,
        },
        business: {
            business_description: data.neg_actividad,
            address: data.neg_direccion,
            address_reference: data.neg_referencia,
            daily_gain: +data.pres_ventas_diarias,
            maximum_daily_gain: +data.pres_dias_buenos,
            minimum_daily_gain: +data.pres_dias_malos,
            inventory_value: +data.pres_inventario,
            have_property_documents: data.doc_negocio,
            have_vouchers: data.compr_negocio,
            observation: data.neg_observacion,
        }
    }

    console.log(creditBody)
    const token = localStorage.getItem('token') || ''
    try {
        const { data } = await financialApi.post('/credits/credit', creditBody, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })

        const creditCreated = data?.credit
        let newEstado
        switch (creditCreated.state) {
            case 'NU': newEstado = 'Nuevo'; break;
            case 'RE': newEstado = 'Renovado'; break;
            case 'AP': newEstado = 'Aprobado'; break;
            case 'DE': newEstado = 'Desembolsado'; break;
            case 'RC': newEstado = 'Rechazado'; break;
        }
        const adaptedCredit = {
            id: creditCreated.id,
            data: [
                creditCreated.fk_customer.first_name + ' ' + creditCreated.fk_customer.last_name,
                creditCreated.fk_customer.dni,
                creditCreated.requested_money,
                newEstado,
                creditCreated.period + ' ' + creditCreated.fk_period_type.name,
                creditCreated.interest_rate,
                creditCreated.fk_employee_analista.first_name + ' ' + creditCreated.fk_employee_analista.last_name,
                creditCreated.fk_employee_cobrador.first_name + ' ' + creditCreated.fk_employee_cobrador.last_name,
            ]
        }

        return {
            ok: true,
            credit: adaptedCredit,
        }
    } catch (error) {
        console.log(error)

        const { statusCode, message } = error.response?.data
        return {
            ok: false,
            error: { statusCode, message }
        }
    }
}