import { civilStatusGetRequest } from "../../../service/catalogue/civilStatusService";
import { clearCivilStatusLogout, setCivilStatus, setLoadingCivilStatus } from "./civilStatusSlice";

export const startLoadingCivilStatus = (data) => {
    return async (dispatch) => {
        dispatch(setLoadingCivilStatus());
        const { ok, civilStatus, errorMessage } = await civilStatusGetRequest(data);
        if (!ok) return dispatch(clearCivilStatusLogout());
        dispatch(setCivilStatus(civilStatus));
    }
}


