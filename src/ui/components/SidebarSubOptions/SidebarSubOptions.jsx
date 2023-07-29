import './SidebarSubOptions.css';

export const SidebarSubOptions = ({
	children,
	isOpenSubOptions,
	numOptions,
}) => {
	const heightSubOptions = numOptions * 2.8 + 1.5 + 'rem';
	const heightLineSubOptions = (numOptions - 1) * 2.8 + 2 + 'rem';

	return (
		<div
			className='main-sidebar__suboptions'
			style={{ height: `${isOpenSubOptions ? heightSubOptions : '0rem'}` }}>
			{children}
			<span
				className='linevertical'
				style={{ height: heightLineSubOptions }}></span>
		</div>
	);
};
