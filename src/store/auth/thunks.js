import { loginRequest, registerRequest } from "../../service/authService";
import { login, logout } from "./authSlice";

export const startLogin = (data) => {
    return async (dispatch) => {
        const user = await loginRequest(data);
        if (!user.ok) return dispatch(logout())
        dispatch(login(user))
    }
}

export const startRegister = (data) => {
    return async (dispatch) => {
        const user = await registerRequest(data);
        dispatch(login(user))
    }
}

export const startAuthToken = ({ fullName, password }) => {
    return async (dispatch) => {

    }
}

export const startLogout = ({ fullName, password }) => {
    return async (dispatch) => {
    }
}