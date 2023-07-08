import { financialApi } from "../api"

export const creditsGetRequest = async (data) => {

    const filter = {
        search_value: data.searchValue,
        state: data.state,
        date_range_first: data.dateRangeFirst,
        date_range_last: data.dateRangeLast,
        money_range_first: data.moneyRangeFirst,
        money_range_last: data.moneyRangeLast,
        id_analista: data.idAnalista,
        id_cobrador: data.idCobrador,
    }

    const token = localStorage.getItem('token') || ''

    try {
        const credits = await financialApi.post('/credits/credit/filter', filter, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            params: {
                limit: 10,
                offset: 0,
            },
        })

        return {
            ok: true,
            credits: credits.data,
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}