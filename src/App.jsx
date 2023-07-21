import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { startCheckAuthToken } from "./store/auth"
import { AppRouter } from "./router/AppRouter"
import { ModalProvider } from "./context/modalContext"
import { AlertProvider } from "./context/alertContext/AlertProvider"

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startCheckAuthToken())
    }, [])

    return (
        <AlertProvider>
            <ModalProvider>
                <AppRouter />
            </ModalProvider>
        </AlertProvider>
    )

}
