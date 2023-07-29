import { Route, Routes } from 'react-router-dom';
import { Credits } from '../views';
import { CreditProvider } from '../context';

export const CreditsRouter = () => {
	return (
		<Routes>
			<Route
				path='/credits'
				element={
					<CreditProvider>
						<Credits />
					</CreditProvider>
				}></Route>
		</Routes>
	);
};
