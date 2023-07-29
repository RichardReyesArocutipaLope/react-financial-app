import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from '../auth/router/AuthRouter';
import { CreditsRouter } from '../credits/routes/CreditsRouter';
import { CatalogueRouter } from '../catalogue/routes/catalogueRouter';
import { DashboardRouter } from '../dashboard/routes/DashboardRouter';
import { CashAccountRouter } from '../cash-account/routes/CashAccountRouter';
import { ReportsRouter } from '../reports/routes/ReportsRouter';
import { SecurityRouter } from '../security/routes/SecurityRouter';
import { ReceivablesRouter } from '../receivables/routes/ReceivablesRouter';
import { useSelector } from 'react-redux';
import { MainLoading } from '../ui/views';
import { DeveloperRouter } from '../developer/routes/DeveloperRouter';

export const AppRouter = () => {
	const { status } = useSelector(state => state.auth);

	if (status === 'checking') return <MainLoading />;

	return (
		<Routes>
			<Route
				path='auth/*'
				element={
					<PublicRoute>
						<AuthRouter />
					</PublicRoute>
				}
			/>
			<Route
				path='/*'
				element={
					<PrivateRoute>
						<DashboardRouter />
						<CatalogueRouter />
						<CreditsRouter />
						<CashAccountRouter />
						<ReportsRouter />
						<SecurityRouter />
						<ReceivablesRouter />
						<DeveloperRouter />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};
