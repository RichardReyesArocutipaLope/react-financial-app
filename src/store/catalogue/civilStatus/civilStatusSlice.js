import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    civilStatus: [],
    message: '',
}

export const civilStatusSlice = createSlice({
    name: 'civilStatusSlice',
    initialState,
    reducers: {
        setLoadingCivilStatus: (state) => {
            state.isLoading = true;
        },

        setCivilStatus: (state, action) => {
            state.civilStatus = action.payload;
            state.isLoading = false;
        },
        
        clearCivilStatusLogout: (state) => {
            state.isLoading = false;
            state.civilStatus = [];
            state.message = '';
        },
    },
})

export const { setLoadingCivilStatus, setCivilStatus, clearCivilStatusLogout } = civilStatusSlice.actions
