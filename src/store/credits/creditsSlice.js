import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    credits: [],
    numberOfCredits: 0,
    message: ''
}

export const creditsSlice = createSlice({
    name: 'creditsSlice',
    initialState,
    reducers: {
        addCredit: (state, action) => {
            state.credits.push(action.payload);
            state.isLoading = false;
        },

        setLoading: (state, action) => {
            state.isLoading = true;
        },

        updateCredit: (state, action) => {
            state.isLoading = false;
            state.credits = [];
        },

        setCredits: (state, action) => {
            console.log(action,'slice')
            state.credits = action.payload.credits;
            state.numberOfCredits=action.payload.numberOfCredits
            state.isLoading = false;
        },

        deleteCreditById: (state, action) => {
            state.credits = state.credits.filter(credit => credit.id !== action.payload)
        },

        clearCreditsLogout: (state) => {
            state.isLoading = false;
            state.credits = [];
            state.message = '';
        }
    },
})

export const { addCredit, setLoading, updateCredit, setCredits, deleteCreditById, clearCreditsLogout } = creditsSlice.actions
