import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'checking', // 'checking','not-authenticated', 'authenticated
    uid: null,
    fullName: null,
    token: null,
    errorMessage: null,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
            state.errorMessage = null;
        },
        logout: (state, action) => {
            console.log(action)
            state.status = 'not-authenticated';
            state.uid = null;
            state.fullName = null;
            state.token = null;
            state.errorMessage = action.payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.errorMessage = null;
        },
    },
})

export const { login, logout, checkingCredentials } = authSlice.actions
