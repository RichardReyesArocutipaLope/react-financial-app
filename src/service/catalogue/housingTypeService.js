import { financialApi } from '../../api';

export const housingTypeGetRequest = async () => {
	const token = localStorage.getItem('token') || '';

	try {
		const { data } = await financialApi.get(`/catalogue/housing-type`, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		const adapterHousingType = [];
		data?.forEach(item => {
			const { id, name } = item;
			const adaptHousingType = { id, name };
			adapterHousingType.push(adaptHousingType);
		});

		return {
			ok: true,
			housingType: adapterHousingType,
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};
