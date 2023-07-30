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
        setDataForFilter({
            searchValue: data.search,
            state: data.state || null,
            dateRangeFirst: data.range_date_from || null,
            dateRangeLast: data.range_date_to || null,
            moneyRangeFirst: +data.range_loan_from || null,
            moneyRangeLast: +data.range_loan_to || null,
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
