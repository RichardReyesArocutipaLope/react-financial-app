import React, { useContext, useEffect, useState } from 'react';
import { useResponsiveTable } from '../../../hooks';
import { SimpleLoading } from '../simpleLoading';
import { TableThead } from '../tableThead/TableThead';
import './Table.css';
import { CreditContext } from '../../../credits/context';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCredit } from '../../../store/credits/creditsSlice';

export const Table = ({ isLoading, arrayData }) => {
	console.log('Table.jsx');

	const { selectedCredit } = useSelector(state => state.credits);
	const { tablethead } = useContext(CreditContext);
	const [tableRwd, setTableRwd] = useState(null);
	const [numRegister, setNumRegister] = useState(10);
	const { maxColumns } = useResponsiveTable();

	useEffect(() => {
		const initialTableRwd = {};
		for (let i = 0; i < numRegister; i++) {
			initialTableRwd[`tr${i}`] = false;
		}
		setTableRwd(initialTableRwd);
	}, [numRegister]);

	const dispatch = useDispatch();

	const onSelectRegister = (data, id) => {
		dispatch(setSelectedCredit({ tablethead, data, id }));
	};

	const handleClickOutside = event => {
		if (
			event.target.closest('.table-container') === null &&
			event.target.closest('.module-options__container') === null
		) {
			dispatch(setSelectedCredit(null));
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className='table-container'>
			{isLoading ? (
				<SimpleLoading />
			) : (
				<table className='table'>
					<TableThead tablethead={tablethead} maxColumns={maxColumns} />
					<tbody className='table__tbody'>
						{arrayData?.map(({ id, data }, index) => (
							<React.Fragment key={id}>
								<tr
									key={id}
									onClick={() => {
										onSelectRegister(data, id);
									}}
									className={`${selectedCredit?.id === id ? 'active' : ''}`}>
									<td className='button-rwd'>
										<i
											onClick={() => {
												setTableRwd(tableRwd => ({
													...tableRwd,
													[`tr${index}`]: !tableRwd[`tr${index}`],
												}));
											}}
											className='fa-solid fa-plus'></i>
									</td>

									{data.map((item, index) => {
										if (index + 1 > maxColumns) return null;
										return <td key={item}>{item}</td>;
									})}
								</tr>
								{tableRwd && tableRwd[`tr${index}`] && data.length > maxColumns && (
									<tr className='tr-children'>
										<div>
											{data.map((item, index) => {
												if (index + 1 <= maxColumns) return null;
												return (
													<td key={item}>
														<span className='tr-children__title'>{tablethead[index]}</span>:
														<span className='tr-children__content'>{item}</span>
													</td>
												);
											})}
										</div>
									</tr>
								)}
							</React.Fragment>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};
