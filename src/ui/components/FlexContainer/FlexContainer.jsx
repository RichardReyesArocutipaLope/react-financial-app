import './FlexContainer.css';

export const FlexContainer = ({ children, margin = '1.1' }) => {
	return (
		<div
			className='flex-container'
			style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }}>
			{children}
		</div>
	);
};
