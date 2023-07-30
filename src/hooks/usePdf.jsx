import { useContext } from 'react';
import { MyDocument } from '../credits/views/credits/MyDocument';
import { CreditContext } from '../credits/context';

export const usePdf = (credits, analistas, cobradores) => {
	const { tablethead, dataForFilter } = useContext(CreditContext);

	const documento = (
		<MyDocument
			credits={credits}
			thead={tablethead}
			dataForFilter={dataForFilter}
			analistas={analistas}
			cobradores={cobradores}
		/>
	);
	return { documento };
};
