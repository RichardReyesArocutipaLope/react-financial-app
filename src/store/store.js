import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { creditsSlice } from './credits/creditsSlice'
import { rolesSlice } from './security/roles'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        credits: creditsSlice.reducer,
        roles: rolesSlice.reducer,
    },
})