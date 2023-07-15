import { housingTypeGetRequest } from "../../../service/catalogue/housingTypeService";
import { clearHousingTypeLogout, setHousingType, setLoadingHousingType } from "./housingTypeSlice";

export const startLoadingHousingType = (data) => {
    return async (dispatch) => {
        dispatch(setLoadingHousingType());
        const { ok, housingType, errorMessage } = await housingTypeGetRequest(data);
        if (!ok) return dispatch(clearHousingTypeLogout());
        dispatch(setHousingType(housingType));
    }
}


