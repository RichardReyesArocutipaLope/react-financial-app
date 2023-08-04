import axios from 'axios';
// import { getEnvVariables } from '../helpers/getEnvVariables';

// const { API_URL } = getEnvVariables();

const financialApi = axios.create({
	baseURL: 'https://nest-financial-app.onrender.com/api',
});

// TODO: configurar interceptors

export default financialApi;
