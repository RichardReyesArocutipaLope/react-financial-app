import './FragmentContainer.css';

export const FragmentContainer = ({
	children,
	col,
	justifyContent = 'center',
	gap = '1rem',
}) => {
	const maxCol = 24;
	const maxWidth = 100;
	let width = 100;
	if (col) {
		width = (col * maxWidth) / maxCol;
	}

	return (
		<div
			className='fragment-container'
			style={{ width: `${width}%`, justifyContent, gap }}>
			{children}
		</div>
	);
};
