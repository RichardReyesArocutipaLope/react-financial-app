import { creditCreateRequest, creditsGetRequest } from "../../service/creditsService";
import { addCredit, clearCreditsLogout, setCredits, setError, setLoading } from "./creditsSlice";

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
        dispatch(setLoading());
        const { ok, credit, error } = await creditCreateRequest(data);
        if (!ok) return dispatch(setError(error));
        dispatch(addCredit(credit));
    }
}

