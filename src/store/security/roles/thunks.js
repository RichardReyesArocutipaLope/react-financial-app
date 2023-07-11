import { rolesGetRequestByName } from "../../../service/security/roles";
import { clearRolesLogout, setAdministradores, setAnalistas, setCajeros, setCobradores, setLoadingRoles } from "./rolesSlice";

export const startLoadingRoleByName = (name) => {
    return async (dispatch) => {
        dispatch(setLoadingRoles());
        const { ok, nameRole, users, errorMessage } = await rolesGetRequestByName(name);
        if (!ok) return dispatch(clearRolesLogout());
        switch (nameRole) {
            case 'administrador': dispatch(setAdministradores(users)); break;
            case 'analista':    dispatch(setAnalistas(users)); break;
            case 'cajero':      dispatch(setCajeros(users)); break;
            case 'cobrador':    dispatch(setCobradores(users)); break;
        }
    }
}