import { financialApi } from '../../api';

export const civilStatusGetRequest = async () => {
	const token = localStorage.getItem('token') || '';

	try {
		const { data } = await financialApi.get(`/catalogue/civil-status`, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		const adapterCivilStatus = [];
		data?.forEach(item => {
			const { id, name } = item;
			const adaptCivilStatus = { id, name };
			adapterCivilStatus.push(adaptCivilStatus);
		});

		return {
			ok: true,
			civilStatus: adapterCivilStatus,
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};
