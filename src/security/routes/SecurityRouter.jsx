import { Route, Routes } from 'react-router-dom';
import { Parameters, Permissions, Security, Users } from '../views';

export const SecurityRouter = () => {
	return (
		<Routes>
			<Route path='security/' element={<Security />}>
				<Route path='users' element={<Users />} />
				<Route path='permissions' element={<Permissions />} />
				<Route path='parameters' element={<Parameters />} />
			</Route>
		</Routes>
	);
};
