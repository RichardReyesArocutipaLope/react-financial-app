import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	roles: [],
	administradores: [],
	analistas: [],
	cajeros: [],
	cobradores: [],
	numberOfRoles: 0,
	message: '',
};

export const rolesSlice = createSlice({
	name: 'rolesSlice',
	initialState,
	reducers: {
		addRole: (state, action) => {
			state.roles.push(action.payload);
			state.isLoading = false;
		},

		setLoadingRoles: (state, action) => {
			state.isLoading = true;
		},

		updateRoles: (state, action) => {
			state.isLoading = false;
			state.roles = [];
		},

		setRoles: (state, action) => {
			state.roles = action.payload.roles;
			state.numberOfRoles = action.payload.numberOfRoles;
			state.isLoading = false;
		},

		setAdministradores: (state, action) => {
			state.administradores = action.payload;
			state.isLoading = false;
		},

		setAnalistas: (state, action) => {
			state.analistas = action.payload;
			state.isLoading = false;
		},

		setCajeros: (state, action) => {
			state.cajeros = action.payload;
			state.isLoading = false;
		},

		setCobradores: (state, action) => {
			state.cobradores = action.payload;
			state.isLoading = false;
		},

		deleteRoleById: (state, action) => {
			state.roles = state.roles.filter(role => role.id !== action.payload);
		},

		clearRolesLogout: state => {
			state.isLoading = false;
			state.roles = [];
			state.message = '';
		},
	},
});

export const {
	addRole,
	setLoadingRoles,
	updateRoles,
	setRoles,
	deleteRoleById,
	clearRolesLogout,
	setAdministradores,
	setAnalistas,
	setCajeros,
	setCobradores,
} = rolesSlice.actions;
