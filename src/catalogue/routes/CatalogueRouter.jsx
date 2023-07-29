import { Outlet, Route, Routes } from 'react-router-dom';
import { Agencies, Customers, Employees, Holidays } from '../views';
import { Catalogue } from '../views/catalogue/Catalogue';

export const CatalogueRouter = () => {
	return (
		<Routes>
			<Route path='catalogue/' element={<Catalogue />}>
				<Route path='agencias' element={<Agencies />} />
				<Route path='empleados' element={<Employees />} />
				<Route path='clientes' element={<Customers />} />
				<Route path='feriados' element={<Holidays />} />
			</Route>
		</Routes>
	);
};
