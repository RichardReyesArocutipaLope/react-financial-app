import { creditCreateRequest, creditGetRequest, creditUpdateRequest, creditsGetRequest } from "../../service/creditsService";
import { addCredit, clearCreditsLogout, setActivateAlert, setCreditFormEdit, setCredits, setError, setLoading, updateCredit } from "./creditsSlice";

export const startLoadingCredits = (dataFilter, parameters) => {
    return async (dispatch) => {
        dispatch(setLoading());
        const { ok, credits, numberOfCredits, errorMessage } = await creditsGetRequest(dataFilter, parameters);
        if (!ok) return dispatch(clearCreditsLogout());
        dispatch(setCredits({ credits, numberOfCredits }));
    }
}

export const startNewCredit = (data) => {
    return async (dispatch) => {
        const { ok, credit, error } = await creditCreateRequest(data);
        if (!ok) {
            dispatch(setError(error));
            dispatch(setActivateAlert({isActive:true, type:'danger'}));
            return;
        }
        dispatch(addCredit(credit));
        dispatch(setActivateAlert({isActive:true, type:'success'}));
    }
}

export const startUpdateCredit = (data, id) => {
    return async (dispatch) => {
        const { ok, credit, error } = await creditUpdateRequest(data, id);
        if (!ok) {
            dispatch(setError(error));
            dispatch(setActivateAlert({isActive:true, type:'danger'}));
            return;
        }
        dispatch(updateCredit(credit));
        dispatch(setActivateAlert({isActive:true, type:'success'}));
    }
}

export const startGetCredit = (id) => {
    return async (dispatch) => {
        const { ok, credit, error } = await creditGetRequest(id);
        if (!ok) {
            dispatch(setError(error));
            return;
        }
        dispatch(setCreditFormEdit(credit));
    }
}


