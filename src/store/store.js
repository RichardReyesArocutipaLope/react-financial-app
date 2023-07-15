import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { creditsSlice } from './credits/creditsSlice'
import { rolesSlice } from './security/roles'
import { creditsOptionsSlice } from './credits/creditsOptionsSlice'
import { civilStatusSlice } from './catalogue/civilStatus/civilStatusSlice'
import { housingTypeSlice } from './catalogue/housingType/housingTypeSlice'
import { periodTypeSlice } from './credits/periodType/periodTypeSlice'
import { financialInterestRateSlice } from './credits/financialInterestRate/financialInterestRateSlice'

export const store = configureStore({
    reducer: {
        //!AUTH MODULE
        auth: authSlice.reducer,

        //! CREDITS MODULE
        credits: creditsSlice.reducer,
        creditsOptions: creditsOptionsSlice.reducer,
        periodType: periodTypeSlice.reducer,
        financialInterestRate: financialInterestRateSlice.reducer,

        //! SECURITY MODULE
        roles: rolesSlice.reducer,

        //! CATALOGUE MODULE
        civilStatus: civilStatusSlice.reducer,
        housingType: housingTypeSlice.reducer,

    },
})