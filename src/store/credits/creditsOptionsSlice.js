import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    submitCreditCreateForm: false,
    cleanCreditCreateForm: false,

    submitCreditEditForm: false,
    resetCreditEditForm: false,

    submitCreditDeleteForm: false,

    submitCreditApprovalForm: false,

    submitCreditDisburseForm: false,
}

export const creditsOptionsSlice = createSlice({
    name: 'creditsOptionsSlice',
    initialState,
    reducers: {
        setSubmitCreditCreateForm: (state, action) => {
            state.submitCreditCreateForm = action.payload;
        },

        setCleanCreditCreateForm: (state, action) => {
            state.cleanCreditCreateForm = action.payload;
        },

        setSubmitCreditEditForm: (state, action) => {
            state.submitCreditEditForm = action.payload;
        },

        setResetCreditEditForm: (state, action) => {
            state.resetCreditEditForm = action.payload;
        },

        setsubmitCreditDeleteForm: (state, action) => {
            state.submitCreditDeleteForm = action.payload;
        },

        setSubmitCreditApprovalForm: (state, action) => {
            state.submitCreditApprovalForm = action.payload;
        },

        setSubmitCreditDisburseForm: (state, action) => {
            state.submitCreditDisburseForm = action.payload
        },
    },
})

export const {
    setSubmitCreditCreateForm,
    setCleanCreditCreateForm,
    setSubmitCreditEditForm,
    setResetCreditEditForm,
    setsubmitCreditDeleteForm,
    setSubmitCreditApprovalForm,
    setSubmitCreditDisburseForm,
} = creditsOptionsSlice.actions
