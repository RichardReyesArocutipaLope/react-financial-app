import { Route, Routes } from "react-router-dom"
import { Dev } from "../views/dev"

export const DeveloperRouter = () => {
    return (
        <Routes>
            <Route path="/dev" element={<Dev/>}>

            </Route>
        </Routes>
    )
}
