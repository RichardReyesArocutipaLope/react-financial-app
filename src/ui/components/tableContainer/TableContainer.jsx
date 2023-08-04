import React, { memo, useContext, useEffect, useState } from 'react';
import { useResponsiveTable } from '../../../hooks';
import { CreditContext } from '../../../credits/context';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCredit } from '../../../store/credits/creditsSlice';
import { Table } from '../table/Table';
import './TableContainer.css';

export const TableContainer = memo(({ isLoading, arrayData }) => {
	// console.log('Table.jsx');
	const { selectedCredit } = useSelector(state => state.credits);
	const { tablethead } = useContext(CreditContext);
	const { maxCols } = useResponsiveTable();
	const [tableRwd, setTableRwd] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const initialTableRwd = {};
		for (let i = 0; i < 10; i++) {
			initialTableRwd[`tr${i}`] = false;
		}
		setTableRwd(initialTableRwd);
	}, []);

	const onSelectRegister = (data, id) => dispatch(setSelectedCredit({ tablethead, data, id }));

	const handleClickOutside = ({ target }) => {
		const closetTable = target.closest('.table-container') === null;
		const closetOptions = target.closest('.module-options__container') === null;
		if (closetTable && closetOptions) dispatch(setSelectedCredit(null));
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	const expand = index => {
		setTableRwd(tableRwd => ({ ...tableRwd, [`tr${index}`]: !tableRwd[`tr${index}`] }));
	};

	const Content = ({ text, index }) => (
		<div>
			<span className='tr-children__title'>{tablethead[index]}</span>:
			<span className='tr-children__content'>{text}</span>
		</div>
	);

	return (
		<Table isLoading={isLoading} tablethead={tablethead} maxCols={maxCols}>
			{arrayData?.map(({ id, data }, index) => (
				<React.Fragment key={id}>
					<tr
						onClick={() => onSelectRegister(data, id)}
						className={`${selectedCredit?.id === id ? 'active' : ''}`}
					>
						{data.length > maxCols && (
							<td className='button-rwd'>
								<i
									onClick={() => expand(index)}
									className={`fa-solid ${tableRwd && tableRwd[`tr${index}`] ? 'fa-minus' : 'fa-plus'}`}
								></i>
							</td>
						)}
						{data.map((item, index) => index + 1 <= maxCols && <td key={item}>{item}</td>)}
					</tr>
					{tableRwd && tableRwd[`tr${index}`] && data.length > maxCols && (
						<tr className='tr-children'>
							<td colSpan={maxCols + 1}>
								{data.map(
									(text, index) => index + 1 > maxCols && <Content key={text} text={text} index={index} />,
								)}
							</td>
						</tr>
					)}
				</React.Fragment>
			))}
		</Table>
	);
});
