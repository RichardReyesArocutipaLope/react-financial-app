import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	housingType: [],
	message: '',
};

export const housingTypeSlice = createSlice({
	name: 'housingTypeSlice',
	initialState,
	reducers: {
		setLoadingHousingType: state => {
			state.isLoading = true;
		},

		setHousingType: (state, action) => {
			state.housingType = action.payload;
			state.isLoading = false;
		},

		clearHousingTypeLogout: state => {
			state.isLoading = false;
			state.housingType = [];
			state.message = '';
		},
	},
});

export const { setLoadingHousingType, setHousingType, clearHousingTypeLogout } =
	housingTypeSlice.actions;
