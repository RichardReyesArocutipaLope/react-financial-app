import { Route, Routes } from "react-router-dom"
import { PayDues, PaymentHistory, Receivables } from "../views"

export const ReceivablesRouter = () => {
    return (
        <Routes>
            <Route path="receivables/" element={<Receivables/>}>
                <Route path="pay-dues" element={<PayDues />} />
                <Route path="payment-history" element={<PaymentHistory />} />
            </Route>
        </Routes>
    )
}
