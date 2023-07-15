import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    financialInterestRate: [],
    message: '',
}

export const financialInterestRateSlice = createSlice({
    name: 'financialInterestRateSlice',
    initialState,
    reducers: {
        setLoadingFinancialInterestRate: (state) => {
            state.isLoading = true;
        },

        setFinancialInterestRate: (state, action) => {
            state.financialInterestRate = action.payload;
            state.isLoading = false;
        },
        
        clearFinancialInterestRateLogout: (state) => {
            state.isLoading = false;
            state.financialInterestRate = [];
            state.message = '';
        }
    },
})

export const { setLoadingFinancialInterestRate, setFinancialInterestRate, clearFinancialInterestRateLogout } = financialInterestRateSlice.actions
