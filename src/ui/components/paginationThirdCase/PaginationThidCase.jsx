import { PaginationButton } from '../paginationButton';

export const PaginationThidCase = ({ data }) => {
	//! [ <- ]  [ 1 ]  [...]  [ 14 ]  [15 ]  [ 16 ]  [ 17 ]  [ 18 ]  [ 19 ]  [ 20 ]  [ -> ]
	const {
		currentPage,
		handleCurrentOffset,
		setCurrentOffset,
		getOffset,
		pages,
		totalPages,
	} = data;
	return (
		<>
			<PaginationButton currentPage={currentPage} page='...' />
			{pages.map(page => (
				<PaginationButton
					key={page}
					currentPage={currentPage}
					page={page}
					funOnClick={() => {
						handleCurrentOffset(page);
					}}
				/>
			))}
			<PaginationButton
				currentPage={currentPage}
				page={totalPages - 1}
				funOnClick={() => {
					setCurrentOffset(getOffset(totalPages - 1));
				}}
			/>
		</>
	);
};
