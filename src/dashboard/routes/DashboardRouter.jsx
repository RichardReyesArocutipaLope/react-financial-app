import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../views"

export const DashboardRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
            </Route>
        </Routes>
    )
}
