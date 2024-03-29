import { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CreditContext } from '../../context';
import {
	Filter,
	ModuleOption,
	ModuleOptions,
	ModuleTitle,
	PaginationContainer,
	TableContainer,
} from '../../../ui/components';
import { moduleOptions } from './';
import { CreditsLoading } from './CreditsLoading';
import { ModalContext } from '../../../context/modalContext';
import { AlertContext } from '../../../context/alertContext/AlertContext';

export const Credits = () => {
	// console.log('Credits.jsx');
	const { isLoading, credits, numberOfCredits } = useSelector(state => state.credits);
	const { currentOffset, setCurrentOffset, parameters } = useContext(CreditContext);
	const { setDataAlert } = useContext(AlertContext);
	const { handleModal } = useContext(ModalContext);

	const moduleChildren = useMemo(
		() =>
			moduleOptions.map(({ moduleOptionData, moduleOptionModal }) => (
				<ModuleOption
					key={moduleOptionData.id}
					moduleOptionData={moduleOptionData}
					moduleOptionModal={moduleOptionModal}
					setDataAlert={setDataAlert}
					handleModal={handleModal}
				/>
			)),
		[],
	);

	return !(credits.length > 0) ? (
		<CreditsLoading />
	) : (
		<>
			<ModuleTitle title='Créditos' />
			<ModuleOptions>{moduleChildren}</ModuleOptions>
			<Filter credits={credits} />
			<TableContainer isLoading={isLoading} arrayData={credits} />
			<PaginationContainer
				currentOffset={currentOffset}
				setCurrentOffset={setCurrentOffset}
				totalPages={Math.ceil(numberOfCredits / parameters.limit)}
				totalRegisters={numberOfCredits}
			/>
		</>
	);
};
