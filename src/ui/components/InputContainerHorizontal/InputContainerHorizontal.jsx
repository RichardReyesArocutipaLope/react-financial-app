import './InputContainerHorizontal.css';

export const InputContainerHorizontal = ({ children, col }) => {
	const maxCol = 24;
	const maxWidth = 100;
	let width = 100;
	if (col) {
		width = (col * maxWidth) / maxCol;
	}

	return (
		<div className='input-container-horizontal' style={{ width: `${width}%` }}>
			{children}
		</div>
	);
};
