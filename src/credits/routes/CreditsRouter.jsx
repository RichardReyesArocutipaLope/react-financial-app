import { Route, Routes } from "react-router-dom"
import { Credits } from "../views"

export const CreditsRouter = () => {
    return (
        <Routes>
            <Route path="/credits" element={<Credits />}>
            </Route>
        </Routes>
    )
}
