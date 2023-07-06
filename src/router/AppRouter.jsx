import { Route, Routes } from "react-router-dom"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"
import { AuthRouter } from "../auth/router/AuthRouter"
import { CreditsRouter } from "../credits/routes/CreditsRouter"
import { CatalogueRouter } from "../catalogue/routes/catalogueRouter"
import { DashboardRouter } from "../dashboard/routes/DashboardRouter"
import { CashAccountRouter } from "../cash-account/routes/CashAccountRouter"
import { ReportsRouter } from "../reports/routes/ReportsRouter"
import { SecurityRouter } from "../security/routes/SecurityRouter"
import { ReceivablesRouter } from "../receivables/routes/ReceivablesRouter"

export const AppRouter = () => {


    return (
        <Routes>
            <Route path="auth/*" element={
                <PublicRoute>
                    <AuthRouter />
                </PublicRoute>
            } />
            <Route path="/*" element={
                <PrivateRoute>
                    <DashboardRouter />
                    <CatalogueRouter />
                    <CreditsRouter />
                    <CashAccountRouter />
                    <ReportsRouter />
                    <SecurityRouter />
                    <ReceivablesRouter />
                </PrivateRoute>
            } />
        </Routes>
        // (<MainLoading/>)
        // (<StormBackground/>)
    )
}
