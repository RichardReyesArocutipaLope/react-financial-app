import { creditsGetRequest } from "../../service/creditsService";
import { clearCreditsLogout, setCredits, setLoading } from "./creditsSlice";

export const startLoadingCredits = (dataFilter, parameters) => {
    return async (dispatch) => {
        dispatch(setLoading());
        const { ok, credits, numberOfCredits, errorMessage } = await creditsGetRequest(dataFilter, parameters);
        if (!ok) return dispatch(clearCreditsLogout());
        dispatch(setCredits({ credits, numberOfCredits }));
    }
}


