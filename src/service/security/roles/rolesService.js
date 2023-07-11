import { financialApi } from "../../../api"

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
        console.log(adapterUsers, 'rolesService')
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