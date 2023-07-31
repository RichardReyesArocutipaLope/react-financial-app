import { memo } from 'react';
import './TableThead.css';

export const TableThead = memo(({ tablethead, maxCols }) => {
	console.log('TableThead.jsx');
	return (
		<thead className='table__thead'>
			<tr>
				{tablethead.length > maxCols && <th className='button-rwd'></th>}
				{tablethead.map((item, index) => {
					if (index + 1 > maxCols) return null;
					return <th key={item}>{item}</th>;
				})}
			</tr>
		</thead>
	);
});
