import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FinancialLayout } from '../ui/layout/FinancialLayout';

export const PrivateRoute = ({ children }) => {
	const { status } = useSelector(state => state.auth);

	return status === 'authenticated' ? (
		<FinancialLayout>{children}</FinancialLayout>
	) : (
		<Navigate to='auth/login' />
	);
};
