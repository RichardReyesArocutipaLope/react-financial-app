import { periodTypeGetRequest } from "../../../service/credits/periodTypeService";
import { clearPeriodTypeLogout, setLoadingPeriodType, setPeriodType } from "./periodTypeSlice";

export const startLoadingPeriodType = (data) => {
    return async (dispatch) => {
        dispatch(setLoadingPeriodType());
        const { ok, periodType, errorMessage } = await periodTypeGetRequest(data);
        if (!ok) return dispatch(clearPeriodTypeLogout());
        dispatch(setPeriodType(periodType));
    }
}


