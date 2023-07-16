import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { startAuthToken } from "./store/auth"
import { AppRouter } from "./router/AppRouter"
import { ModalProvider } from "./context/modalContext"
import { AlertProvider } from "./context/alertContext/AlertProvider"

export const App = () => {

    const dispatch = useDispatch();
    const data = { user: '', password: '' }
    useEffect(() => {
        dispatch(startAuthToken(data))
    }, [])

    return (
        <AlertProvider>
            <ModalProvider>
                <AppRouter />
            </ModalProvider>
        </AlertProvider>
    )

}
