import { useContext } from 'react';
import { CreditContext } from '../context';

export const useFilterCredits = reset => {
	const { setDataForFilter } = useContext(CreditContext);

	const onSearch = data => {
		setDataForFilter({
			searchValue: data.search,
			state: null,
			dateRangeFirst: null,
			dateRangeLast: null,
			moneyRangeFirst: null,
			moneyRangeLast: null,
			idAnalista: null,
			idCobrador: null,
		});
	};

	const onSubmit = data => {
		const hasMoney = !!data.range_loan_from && !!data.range_loan_to;
		const hasDate = !!data.range_date_from && !!data.range_date_to;
		setDataForFilter({
			searchValue: data.search,
			state: data.state || null,
			dateRangeFirst: hasDate ? data.range_date_from : null,
			dateRangeLast: hasDate ? data.range_date_to : null,
			moneyRangeFirst: hasMoney ? +data.range_loan_from : null,
			moneyRangeLast: hasMoney ? +data.range_loan_to : null,
			idAnalista: +data.id_analista || null,
			idCobrador: +data.id_cobrador || null,
		});
	};

	const onReset = () => {
		reset();
		setDataForFilter({
			searchValue: '',
			state: null,
			dateRangeFirst: null,
			dateRangeLast: null,
			moneyRangeFirst: null,
			moneyRangeLast: null,
			idAnalista: null,
			idCobrador: null,
		});
	};
	return { onSearch, onSubmit, onReset };
};
