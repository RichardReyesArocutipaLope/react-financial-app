import './RowForDocument.css';

export const RowForDocument = ({
	children,
	margin = '1.1',
	justifyContent = 'start',
}) => {
	return (
		<div
			className='row-for-document'
			style={{
				marginTop: `${margin}rem`,
				marginBottom: `${margin}rem`,
				justifyContent,
			}}>
			{children}
		</div>
	);
};
