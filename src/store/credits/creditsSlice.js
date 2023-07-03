import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false, // 'checking','not-authenticated', 'authenticated
    credits:[],
    message:''
}

export const creditsSlice = createSlice({
    name: 'creditsSlice',
    initialState,
    reducers: {
        addCredit:(state, action)=>{
            state.credits.push(action.payload);
            state.isSaving = false;
        },

        setSaving:(state, action)=>{
            state.isSaving=true;
            state.message=''
        },

        updateCredit:(state, action)=>{
            state.isSaving=false;
            state.credits=[];
        },
        
        setCredits: (state,action)=>{
            state.credits = action.payload;
        },

        deleteCreditById:(state, action) => {
            state.credits = state.credits.filter(credit => credit.id !== action.payload)
        }
    },
})

export const { addCredit, setSaving, updateCredit, setCredits, deleteCreditById } = creditsSlice.actions
