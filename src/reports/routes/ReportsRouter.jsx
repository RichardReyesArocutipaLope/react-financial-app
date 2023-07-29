import { Route, Routes } from 'react-router-dom';
import { Reports } from '../views';

export const ReportsRouter = () => {
	return (
		<Routes>
			<Route path='/reports' element={<Reports />}></Route>
		</Routes>
	);
};
