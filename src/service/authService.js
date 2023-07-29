import { financialApi } from '../api';

export const loginRequest = async ({ user, password }) => {
	try {
		const { data } = await financialApi.post(
			'/auth/users/login',
			{ full_name: user, password },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const {
			token,
			user: { fk_employee, id, fk_role },
		} = data;

		localStorage.setItem('token', token);
		localStorage.setItem('token-init-date', new Date().getTime());

		return {
			ok: true,
			uid: id,
			fullName: fk_employee.first_name,
			role: fk_role.name,
			token,
		};
	} catch (error) {
		const errorType = error.response?.data?.error;
		let errorMessage = 'Error del servidor';
		if (errorType == 'Bad Request' || errorType == 'Unauthorized') {
			errorMessage = 'El nombre de usuario o contraseña son incorrectos';
		}
		return {
			ok: false,
			errorMessage,
		};
	}
};

export const registerRequest = async ({
	fullName,
	password,
	idEmployee,
	idRole,
}) => {
	try {
		const { data } = await financialApi.post(
			'/auth/users/login',
			{
				full_name: fullName,
				password,
				fk_employee: idEmployee,
				fk_role: idRole,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const {
			token,
			user: { fk_employee, id, fk_role },
		} = data;

		return {
			ok: true,
			uid: id,
			fullName: fk_employee.first_name,
			role: fk_role.name,
			token,
		};
	} catch (error) {
		console.log(error);
	}
};

export const CheckAuthRequest = async tokenn => {
	try {
		const { data } = await financialApi.get(`/auth/users/check-status`, {
			headers: {
				Authorization: 'Bearer ' + tokenn,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		const {
			token,
			user: { fk_employee, id, fk_role },
		} = data;

		localStorage.setItem('token', token);
		localStorage.setItem('token-init-date', new Date().getTime());
		return {
			ok: true,
			uid: id,
			fullName: fk_employee.first_name,
			role: fk_role.name,
			token,
		};
	} catch (error) {
		const errorType = error.response?.data?.error;
		let errorMessage = 'Error del servidor';
		if (errorType == 'Bad Request' || errorType == 'Unauthorized') {
			errorMessage = 'El nombre de usuario o contraseña son incorrectos';
		}
		localStorage.clear();
		return {
			ok: false,
			errorMessage,
		};
	}
};
