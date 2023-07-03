import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { creditsSlice } from './credits/creditsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        credits: creditsSlice.reducer,
    },
})