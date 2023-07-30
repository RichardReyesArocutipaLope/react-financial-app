import { CreditsLoading } from '../../credits/views/credits/CreditsLoading';
import { Header, ModuleContainer, Sidebar } from '../components';

export const FinancialLayout = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div className='content-app'>
				<Header />
				<ModuleContainer>{children}</ModuleContainer>
				{/* <ModuleContainer>
					<CreditsLoading />
				</ModuleContainer> */}
			</div>
		</>
	);
};
