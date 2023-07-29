import { Route, Routes } from 'react-router-dom';
import { CashAccount, Operations } from '../views';
import { Cash } from '../views/cash';

export const CashAccountRouter = () => {
	return (
		<Routes>
			<Route path='cash-account/' element={<CashAccount />}>
				<Route path='cash' element={<Cash />} />
				<Route path='operations' element={<Operations />} />
			</Route>
		</Routes>
	);
};
