import { PaginationButton } from '../paginationButton';

export const PaginationSecondCase = ({ data }) => {
	//! [ <- ]  [ 1 ]  [...]  [ 8 ]  [ 9 ]  [ 10 ]  [ 11 ]  [ 12 ]  [... ]  [ 20 ]  [ -> ]
	const { currentPage, handleCurrentOffset, pages } = data;
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
			<PaginationButton currentPage={currentPage} page='...' />
		</>
	);
};
