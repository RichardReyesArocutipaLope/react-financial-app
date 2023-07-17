import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    credits: [],
    creditActive: [],
    numberOfCredits: 0,
    message: {},
    activateAlert: { isActive: false, type: '' },
}

export const creditsSlice = createSlice({
    name: 'creditsSlice',
    initialState,
    reducers: {
        addCredit: (state, action) => {
            state.credits.unshift(action.payload);
            state.credits.pop();
            state.isLoading = false;
            state.numberOfCredits = state.numberOfCredits + 1
            state.message = { statusCode: '', message: 'Registro creado con exito' }
        },

        setLoading: (state, action) => {
            state.isLoading = true;
        },

        updateCredit: (state, action) => {
            state.isLoading = false;
            state.credits = [];
        },

        setCredits: (state, action) => {
            console.log(action, 'slice')
            state.credits = action.payload.credits;
            state.numberOfCredits = action.payload.numberOfCredits;
            state.isLoading = false;
        },

        deleteCreditById: (state, action) => {
            state.credits = state.credits.filter(credit => credit.id !== action.payload)
        },

        clearCreditsLogout: (state) => {
            state.isLoading = false;
            state.credits = [];
            state.message = {};
        },

        setError: (state, action) => {
            state.message = action.payload;
            state.isLoading = false;
        },

        setActivateAlert: (state, action) => {
            state.activateAlert = action.payload
        }
    },
})

export const { addCredit, setLoading, updateCredit, setCredits, deleteCreditById,
    clearCreditsLogout, setError, setActivateAlert } = creditsSlice.actions
