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
        console.log(data,'service')

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