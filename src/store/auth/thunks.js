import { CheckAuthRequest, loginRequest, registerRequest } from "../../service/authService";
import { checkingCredentials, login, logout } from "./authSlice";

export const startLogin = (data) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const user = await loginRequest(data);
        if (!user.ok) return dispatch(logout(user))
        dispatch(login(user))
    }
}

export const startRegister = (data) => {
    return async (dispatch) => {
        const user = await registerRequest(data);
        dispatch(login(user))
    }
}

export const startCheckAuthToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token') || null
        if (!token) return dispatch(logout());

        const user = await CheckAuthRequest(token);
        if (!user.ok) return dispatch(logout())
        dispatch(login(user))
    }
}

export const startLogout = (data) => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout())
    }
}