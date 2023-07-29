import { financialApi } from '../../api';

export const periodTypeGetRequest = async () => {
	const token = localStorage.getItem('token') || '';

	try {
		const { data } = await financialApi.get(`/credits/period-type`, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		const adapterPeriodType = [];
		data?.forEach(item => {
			const { id, name } = item;
			const adaptPeriodType = { id, name };
			adapterPeriodType.push(adaptPeriodType);
		});

		return {
			ok: true,
			periodType: adapterPeriodType,
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};
