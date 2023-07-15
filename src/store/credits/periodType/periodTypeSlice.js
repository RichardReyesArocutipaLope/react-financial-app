import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    periodType: [],
    message: '',
}

export const periodTypeSlice = createSlice({
    name: 'periodTypeSlice',
    initialState,
    reducers: {
        setLoadingPeriodType: (state) => {
            state.isLoading = true;
        },

        setPeriodType: (state, action) => {
            state.periodType = action.payload;
            state.isLoading = false;
        },
        
        clearPeriodTypeLogout: (state) => {
            state.isLoading = false;
            state.periodType = [];
            state.message = '';
        },
    },
})

export const { setLoadingPeriodType, setPeriodType, clearPeriodTypeLogout } = periodTypeSlice.actions
