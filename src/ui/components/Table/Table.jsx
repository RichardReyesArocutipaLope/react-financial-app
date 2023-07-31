import { SimpleLoading } from '../simpleLoading';
import { TableThead } from '../tableThead/TableThead';
import './Table.css';

export const Table = ({ children, isLoading, tablethead, maxCols }) => {
	return (
		<div className='table-container'>
			{isLoading ? (
				<SimpleLoading />
			) : (
				<table className='table'>
					<TableThead tablethead={tablethead} maxCols={maxCols} />
					<tbody className='table__tbody'>{children}</tbody>
				</table>
			)}
		</div>
	);
};
