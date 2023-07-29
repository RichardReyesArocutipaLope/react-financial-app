import { Header, ModuleContainer, Sidebar } from '../components';

export const FinancialLayout = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div className='content-app'>
				<Header />
				<ModuleContainer>{children}</ModuleContainer>
			</div>
		</>
	);
};
