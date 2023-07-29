import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages';

export const AuthRouter = () => {
	return (
		<Routes>
			<Route path='login' element={<Login />} />
			<Route path='portafolio' element={<h1>Hola portafolio</h1>} />
			<Route path='/*' element={<Navigate to='login' />} />
		</Routes>
	);
};
