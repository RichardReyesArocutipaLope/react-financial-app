import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../views';

export const DashboardRouter = () => {
	return (
		<Routes>
			<Route path='/dashboard' element={<Dashboard />}></Route>
			<Route path='/' element={<Navigate to='/dashboard' />} />
		</Routes>
	);
};
