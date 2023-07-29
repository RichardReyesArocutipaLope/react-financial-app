import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

// const { API_URL } = getEnvVariables();

const financialApi = axios.create({
	baseURL: 'http://localhost:3000/api',
});

// TODO: configurar interceptors

export default financialApi;
