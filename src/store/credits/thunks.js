import {
	creditApproveRequest,
	creditCreateRequest,
	creditDeleteRequest,
	creditDisburseRequest,
	creditGetRequest,
	creditUpdateRequest,
	creditsGetRequest,
} from '../../service/creditsService';
import {
	addCredit,
	clearCreditsLogout,
	setActivateAlert,
	setApproveCredit,
	setCreditFormEdit,
	setCreditRawSelected,
	setCredits,
	setDeleteCredit,
	setDisburseCredit,
	setError,
	setLoading,
	updateCredit,
} from './creditsSlice';

export const startLoadingCredits = (dataFilter, parameters) => {
	return async dispatch => {
		dispatch(setLoading());
		const { ok, credits, numberOfCredits, errorMessage } =
			await creditsGetRequest(dataFilter, parameters);
		if (!ok) return dispatch(clearCreditsLogout());
		dispatch(setCredits({ credits, numberOfCredits }));
	};
};

export const startNewCredit = data => {
	return async dispatch => {
		const { ok, credit, error } = await creditCreateRequest(data);
		if (!ok) {
			dispatch(setError(error));
			dispatch(setActivateAlert({ isActive: true, type: 'danger' }));
			return;
		}
		dispatch(addCredit(credit));
		dispatch(setActivateAlert({ isActive: true, type: 'success' }));
	};
};

export const startUpdateCredit = (data, id) => {
	return async dispatch => {
		const { ok, credit, error } = await creditUpdateRequest(data, id);
		if (!ok) {
			dispatch(setError(error));
			dispatch(setActivateAlert({ isActive: true, type: 'danger' }));
			return;
		}
		dispatch(updateCredit(credit));
		dispatch(setActivateAlert({ isActive: true, type: 'success' }));
	};
};

export const startGetCredit = id => {
	return async dispatch => {
		const { ok, credit, error, creditRaw } = await creditGetRequest(id);
		if (!ok) {
			dispatch(setError(error));
			return;
		}
		dispatch(setCreditFormEdit(credit));
		dispatch(setCreditRawSelected(creditRaw));
	};
};

export const startDeleteCredit = id => {
	return async dispatch => {
		const { ok, error } = await creditDeleteRequest(id);
		if (!ok) {
			dispatch(setError(error));
			dispatch(setActivateAlert({ isActive: true, type: 'danger' }));
			return;
		}
		dispatch(setDeleteCredit());
		dispatch(setActivateAlert({ isActive: true, type: 'success' }));
		dispatch(
			startLoadingCredits(
				{
					searchValue: '',
					state: null,
					dateRangeFirst: null,
					dateRangeLast: null,
					moneyRangeFirst: null,
					moneyRangeLast: null,
					idAnalista: null,
					idCobrador: null,
				},
				{ limit: 10, offset: 0 },
			),
		);
	};
};

export const startApproveCredit = id => {
	return async dispatch => {
		const { ok, credit, error } = await creditApproveRequest(id);
		if (!ok) {
			dispatch(setError(error));
			dispatch(setActivateAlert({ isActive: true, type: 'danger' }));
			return;
		}
		dispatch(setApproveCredit(credit));
		dispatch(setActivateAlert({ isActive: true, type: 'success' }));
	};
};

export const startDisburseCredit = id => {
	return async dispatch => {
		const { ok, credit, error } = await creditDisburseRequest(id);
		if (!ok) {
			dispatch(setError(error));
			dispatch(setActivateAlert({ isActive: true, type: 'danger' }));
			return;
		}
		dispatch(setDisburseCredit(credit));
		dispatch(setActivateAlert({ isActive: true, type: 'success' }));
	};
};
