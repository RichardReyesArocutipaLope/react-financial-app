import { financialApi } from "../../api";

export const financialInterestRateGetRequest = async () => {

    const token = localStorage.getItem('token') || ''

    try {
        const { data } = await financialApi.get(`/credits/financial-interest-rate`, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })

        let adapterFinancialInterestRate = []
        data?.forEach(item => {
            const { id, name } = item;
            const adaptFinancialInterestRate = { id, name }
            adapterFinancialInterestRate.push(adaptFinancialInterestRate)
        });

        return {
            ok: true,
            financialInterestRate: adapterFinancialInterestRate
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}