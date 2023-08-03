import { useState } from 'react';
import './FormTabHeader.css';

export const FormTabHeader = ({ labelTabsHeader, centinela }) => {
	const [tabh, setTabh] = useState('#1');

	return (
		<div className='form-tab__header'>
			{labelTabsHeader.map(({ label, icon, href }) => (
				<a
					key={href}
					href={href}
					className={`form-tab__header-item ${tabh === href ? 'active' : ''}`}
					onClick={() => setTabh(href)}
				>
					{centinela <= 1280 ? icon : label}
				</a>
			))}
		</div>
	);
};
