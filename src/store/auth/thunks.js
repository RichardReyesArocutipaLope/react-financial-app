import { loginRequest, registerRequest } from "../../service/authService";
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

export const startAuthToken = (data) => {
    return async (dispatch) => {
        dispatch(logout())
    }
}

export const startLogout = (data) => {
    return async (dispatch) => {
    }
}