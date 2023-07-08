import { creditsGetRequest } from "../../service/creditsService";
import { clearCreditsLogout, setCredits, setLoading } from "./creditsSlice";


export const startLoadingCredits = (data) => {
    return async (dispatch) => {
        dispatch(setLoading())
        const credits = await creditsGetRequest(data);
        if (!credits.ok) return dispatch(clearCreditsLogout())
        dispatch(setCredits(credits))
    }
}