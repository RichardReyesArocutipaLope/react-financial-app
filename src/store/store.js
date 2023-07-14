import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { creditsSlice } from './credits/creditsSlice'
import { rolesSlice } from './security/roles'
import { creditsOptionsSlice } from './credits/creditsOptionsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        credits: creditsSlice.reducer,
        creditsOptions: creditsOptionsSlice.reducer,
        roles: rolesSlice.reducer,
    },
})