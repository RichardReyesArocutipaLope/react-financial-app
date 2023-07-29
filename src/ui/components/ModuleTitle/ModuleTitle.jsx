import { memo } from 'react';
import './ModuleTitle.css';

export const ModuleTitle = memo(({ title }) => {
	console.log('ModuleTitle.jsx');
	return (
		<div>
			<h1 className='main-title'>{title}</h1>
		</div>
	);
});
