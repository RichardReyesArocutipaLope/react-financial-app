import { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CreditContext } from '../../context';
import {
	Filter,
	ModuleOption,
	ModuleOptions,
	ModuleTitle,
	PaginationContainer,
	Table,
} from '../../../ui/components';
import { moduleOptions } from './';

export const Credits = () => {
	console.log('Credits.jsx');

	const { isLoading, credits, numberOfCredits } = useSelector(state => state.credits);
	const { currentOffset, setCurrentOffset, parameters } = useContext(CreditContext);

	const moduleChildren = useMemo(
		() =>
			moduleOptions.map(({ moduleOptionData, moduleOptionModal }) => (
				<ModuleOption
					key={moduleOptionData.id}
					moduleOptionData={moduleOptionData}
					moduleOptionModal={moduleOptionModal}
				/>
			)),
		[],
	);

	return !(credits.length > 0) ? (
		<h1>Cargando...</h1>
	) : (
		<>
			<ModuleTitle title='Créditos' />
			<ModuleOptions>{moduleChildren}</ModuleOptions>
			<Filter credits={credits} />
			<Table isLoading={isLoading} arrayData={credits} />
			<PaginationContainer
				currentOffset={currentOffset}
				setCurrentOffset={setCurrentOffset}
				totalPages={Math.ceil(numberOfCredits / parameters.limit)}
				totalRegisters={numberOfCredits}
			/>
		</>
	);
};
