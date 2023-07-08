import { useEffect} from "react"
import { useDispatch } from "react-redux"
import { startLogin } from "./store/auth"
import { AppRouter } from "./router/AppRouter"
import { ModalProvider } from "./context/modalContext"

export const App = () => {

    const dispatch = useDispatch();
    const data = { user: '', password: '' }
    useEffect(() => {
        dispatch(startLogin(data))
    }, [])

    return (
        <ModalProvider>
            <AppRouter />
        </ModalProvider>
    )

}
