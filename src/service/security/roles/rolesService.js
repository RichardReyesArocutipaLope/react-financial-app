import { financialApi } from "../../../api"

// ! ESTO TRAE A LOS EMPLEADOS SEGUN A QUE ROL ESTE ASIGNADO SU USUARIO
// ! Y ESTA MAL, YA QUE ES EL MODULO DE ROLES Y SOLO DEBERIA TRAER ROLES, 
// !EN ESTE CASO UN ROL SEGUN EL NOMBRE, SI LE INDICO "ANALISTA" DEBERIA TRAER EL ROL DE ANALISTA Y LISTO :(

export const rolesGetRequestByName = async (name) => {

    const token = localStorage.getItem('token') || ''

    try {
        const { data } = await financialApi.get(`/security/roles/name/${name}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })

        let adapterUsers = []
        data.user?.forEach(user => {
            const { fk_employee } = user;
            const adaptUser = {
                id: fk_employee.id,
                fullname: fk_employee.first_name + ' ' + fk_employee.last_name,
            }
            adapterUsers.push(adaptUser)
        });

        return {
            ok: true,
            nameRole: data.name,
            users: adapterUsers
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}