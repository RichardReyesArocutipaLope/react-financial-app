import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    credits: [],
    creditFormEdit: {},

    selectedCredit: null,
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

        updateCredit: (state, action) => {
            state.credits=state.credits.map(credit=> {
                if (credit.id==action.payload.id) {
                    return { 
                        id: action.payload.id,
                        data:action.payload.data
                    }
                }
                return credit;
            })
            state.isLoading = false;
            state.message = { statusCode: '', message: 'Registro editado con exito' }
        },

        setLoading: (state, action) => {
            state.isLoading = true;
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
        },

        setCreditFormEdit: (state, action) => {
            state.creditFormEdit = action.payload
        },

        setSelectedCredit: (state, action) => {
            state.selectedCredit = action.payload
        }
    },
})

export const { addCredit, setLoading, updateCredit, setCredits, deleteCreditById,
    clearCreditsLogout, setError, setActivateAlert, setCreditFormEdit, setSelectedCredit } = creditsSlice.actions
