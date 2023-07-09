import { financialApi } from "../api"

export const loginRequest = async ({ user, password }) => {
    try {
        const { data } = await financialApi.post('/auth/users/login', { full_name: user, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const { token, user: { full_name, id } } = data;

        localStorage.setItem('token', token);
        localStorage.setItem('token-init-date', new Date().getTime());

        return {
            ok: true,
            uid: id,
            fullName: full_name,
            token: token,
        }

    } catch (error) {
        const errorType = error.response?.data?.error
        let errorMessage='Error del servidor'
        if (errorType == 'Bad Request' || errorType == 'Unauthorized') {
            errorMessage ='El nombre de usuario o contraseña son incorrectos'
        }
        return {
            ok: false,
            errorMessage: errorMessage,
        }
    }
}

export const registerRequest = async ({ fullName, password, idEmployee, idRole }) => {
    try {
        const { data } = await financialApi.post('/auth/users/login', {
            full_name: fullName,
            password,
            fk_employee: idEmployee,
            fk_role: idRole
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const { token, user: { full_name, id } } = data;

        return {
            ok: true,
            uid: id,
            fullName: full_name,
            token: token,
        }

    } catch (error) {
        console.log(error)
    }
}


