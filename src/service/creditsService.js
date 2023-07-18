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


    const deleteNull = (aea) => {
        let newData = {}
        for (const [key, value] of Object.entries(aea)) {
            if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                newData[key] = deleteNull(value); continue;
            }
            if (value !== 0 && value !== null && value !== '' && (!Array.isArray(value) || value.length > 0)) {
                if (Array.isArray(value)) {
                    let newArray = []
                    value.forEach(item => { newArray.push(deleteNull(item)); })
                    let cleanNewArray = newArray.filter(element => { Object.keys(element).length !== 0; })
                    if (cleanNewArray.length > 0) newData[key] = cleanNewArray;
                } else {
                    newData[key] = value;
                }
            }
        }
        return newData
    }

    const newCrediBody = deleteNull(creditBody)

    const token = localStorage.getItem('token') || ''
    try {
        const { data } = await financialApi.post('/credits/credit', newCrediBody, {
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

export const creditUpdateRequest = async (data, id) => {

    const creditBody = {
        requested_money: +data.pres_solicitado,
        approved_money: +data.pres_aprobado,
        disbursement_date: null,
        period: +data.pres_plazo,
        interest_rate: +data.pres_tasa,
        fk_employee_cobrador: +data.cobrador,
        fk_employee_analista: +data.analista,
        fk_financial_interest: +data.pres_interes,
        fk_period_type: +data.pres_tipo_plazo,
        aval: [
            {
                id: +data.aval1_id,

                dni: +data.aval1_dni,
                first_name: data.aval1_nombres,
                last_name: data.aval1_apellidos,
                phone: data.aval1_celular1,
                email: data.aval1_correo,
                address: data.aval1_domicilio,
            },
            {
                id: +data.aval2_id,

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
                id: +data.ref1_id,
                dni: +data.ref1_dni,
                first_name: data.ref1_nombres,
                last_name: data.ref1_apellidos,
                phone: data.ref1_celular1,
                email: data.ref1_correo,
                address: data.ref1_domicilio,
                relationship: data.ref1_parentesco
            },
            {
                id: +data.ref2_id,
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
            id: +data.cli_id,
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
            id: +data.neg_id,
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
    console.log(creditBody, 'UPDATE CREDIT')

    const deleteNull = (aea) => {
        let newData = {}
        for (const [key, value] of Object.entries(aea)) {
            if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                newData[key] = deleteNull(value); continue;
            }
            if (value !== 0 && value !== null && value !== '' && (!Array.isArray(value) || value.length > 0)) {
                if (Array.isArray(value)) {
                    let newArray = []
                    value.forEach(item => { newArray.push(deleteNull(item)); })
                    let cleanNewArray = newArray.filter(element => { Object.keys(element).length !== 0; })
                    if (cleanNewArray.length > 0) newData[key] = cleanNewArray;
                } else {
                    newData[key] = value;
                }
            }
        }
        return newData
    }

    const newCrediBody = deleteNull(creditBody)

    const token = localStorage.getItem('token') || ''
    try {
        const { data } = await financialApi.patch(`/credits/credit/${id}`, newCrediBody, {
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


export const creditGetRequest = async (id) => {

    const token = localStorage.getItem('token') || ''

    try {
        const { data } = await financialApi.get(`/credits/credit/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })

        const convertDataToFormCreate = {
            cobrador: data.fk_employee_cobrador.id,
            analista: data.fk_employee_analista.id,
            cli_id: data.fk_customer.id,
            dni_cliente: data.fk_customer.dni,
            cli_nombre: data.fk_customer.first_name,
            cli_apellidos: data.fk_customer.last_name,
            cli_domicilio: data.fk_customer.address,
            cli_vivienda: data.fk_customer.fk_housing_type.id,
            cli_estado_civil: data.fk_customer.fk_civil_status.id,
            cli_celular1: data.fk_customer.phone,
            cli_celular2: data.fk_customer.phone2,
            cli_ref_domicilio: data.fk_customer.address_reference,
            cli_correo: data.fk_customer.email,
            clie_obs: data.fk_customer.observation,

            neg_actividad: data.fk_customer.business.business_description,
            neg_direccion: data.fk_customer.business.address,
            neg_id: data.fk_customer.business.id,
            neg_referencia: data.fk_customer.business.address_reference,
            neg_observacion: data.fk_customer.business.observation,
            pres_solicitado: data.requested_money,
            pres_fecha_emision: data.date_of_issue,
            pres_plazo: data.period,
            pres_tipo_plazo: data.fk_period_type.id,
            pres_interes: data.fk_financial_interest.id,
            pres_tasa: data.interest_rate,
            pres_ventas_diarias: data.fk_customer.business.daily_gain,
            pres_dias_buenos: data.fk_customer.business.maximum_daily_gain,
            pres_dias_malos: data.fk_customer.business.minimum_daily_gain,
            pres_inventario: data.fk_customer.business.inventory_value,
            pres_aprobado: data.approved_money,
            pres_fecha_desembolso: data.disbursement_date,

            recibo_luz: data.fk_customer.has_electricity_bill,
            mayor_21: data.fk_customer.is_over_21,
            dni_vigente: data.fk_customer.have_valid_dni,
            doc_negocio: data.fk_customer.business.have_property_documents,
            doc_vivienda: data.fk_customer.have_property_documents,
            compr_negocio: data.fk_customer.business.have_vouchers,


            ref1_id: data.personalReference[0]?.id,
            ref1_dni: data.personalReference[0]?.dni,
            ref1_nombres: data.personalReference[0]?.first_name,
            ref1_apellidos: data.personalReference[0]?.last_name,
            ref1_domicilio: data.personalReference[0]?.address,
            ref1_parentesco: data.personalReference[0]?.relationship,
            ref1_celular1: data.personalReference[0]?.phone,
            ref1_correo: data.personalReference[0]?.email,

            ref2_id: data.personalReference[1]?.id,
            ref2_dni: data.personalReference[1]?.dni,
            ref2_nombres: data.personalReference[1]?.first_name,
            ref2_apellidos: data.personalReference[1]?.last_name,
            ref2_domicilio: data.personalReference[1]?.address,
            ref2_parentesco: data.personalReference[1]?.relationship,
            ref2_celular1: data.personalReference[1]?.phone,
            ref2_correo: data.personalReference[1]?.email,

            aval1_id: data.aval[0]?.id,
            aval1_dni: data.aval[0]?.dni,
            aval1_nombres: data.aval[0]?.first_name,
            aval1_apellidos: data.aval[0]?.last_name,
            aval1_domicilio: data.aval[0]?.address,
            aval1_correo: data.aval[0]?.email,
            aval1_celular1: data.aval[0]?.phone,

            aval2_id: data.aval[1]?.id,
            aval2_dni: data.aval[1]?.dni,
            aval2_nombres: data.aval[1]?.first_name,
            aval2_apellidos: data.aval[1]?.last_name,
            aval2_domicilio: data.aval[1]?.address,
            aval2_correo: data.aval[1]?.email,
            aval2_celular1: data.aval[1]?.phone,
        }

        return {
            ok: true,
            credit: {
                dataCreditform: convertDataToFormCreate,
                id: data.id
            }
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            error: { statusCode, message }
        }
    }
}

