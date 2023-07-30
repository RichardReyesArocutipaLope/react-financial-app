import { memo } from 'react';
import './TableThead.css';

export const TableThead = memo(({ tablethead, maxColumns }) => {
	console.log('TableThead.jsx');
	return (
		<thead className='table__thead'>
			<tr>
				<th className='button-rwd'></th>
				{tablethead.map((item, index) => {
					if (index + 1 > maxColumns) return null;
					return <th key={item}>{item}</th>;
				})}
			</tr>
		</thead>
	);
});
