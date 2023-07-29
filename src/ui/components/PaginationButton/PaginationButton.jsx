import './PaginationButton.css';

export const PaginationButton = ({
	currentPage,
	page,
	funOnClick = () => {},
}) => {
	return (
		<span
			className={`pagination-button ${page == currentPage ? 'active' : ''}`}
			onClick={funOnClick}>
			{page}
		</span>
	);
};
