import { creditsGetRequest } from "../../service/creditsService";
import { clearCreditsLogout, setCredits, setLoading } from "./creditsSlice";

export const startLoadingCredits = (data) => {
    return async (dispatch) => {
        dispatch(setLoading());
        const {ok, credits, errorMessage} = await creditsGetRequest(data);
        if (!ok) return dispatch(clearCreditsLogout());
        dispatch(setCredits(credits));
    }
}