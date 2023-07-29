import { financialInterestRateGetRequest } from '../../../service/credits/financialInterestRateService';
import {
	clearFinancialInterestRateLogout,
	setFinancialInterestRate,
	setLoadingFinancialInterestRate,
} from './financialInterestRateSlice';

export const startLoadingFinancialInterestRate = () => {
	return async dispatch => {
		dispatch(setLoadingFinancialInterestRate());
		const { ok, financialInterestRate, errorMessage } =
			await financialInterestRateGetRequest();
		if (!ok) return dispatch(clearFinancialInterestRateLogout());
		dispatch(setFinancialInterestRate(financialInterestRate));
	};
};
