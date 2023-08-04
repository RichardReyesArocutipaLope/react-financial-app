import { memo, useState } from 'react';
import { Pagination } from '../pagination/Pagination';
import { PaginationFirstCase } from '../paginationFirstCase';
import { PaginationSecondCase } from '../paginationSecondCase';
import { PaginationThidCase } from '../paginationThirdCase';
import { PaginationFourthCase } from '../paginationFourthCase';
import './PaginationContainer.css';

export const PaginationContainer = memo(({ currentOffset, setCurrentOffset, totalPages, totalRegisters }) => {
	// console.log('PaginationContainer');

	const currentPage = (currentOffset + 10) / 10;
	const initialPages = [currentPage + 2, currentPage + 3, currentPage + 4, currentPage + 5, currentPage + 6];
	const [pages, setPages] = useState(initialPages);
	const getOffset = num => num * 10 - 10;

	const handleCurrentOffset = page => {
		const repeat = [page - 1, page, page + 1];
		const middle = [page - 2, ...repeat, page + 2];
		const fourthFirst = [...repeat, page + 2, page + 3];
		const fourthLast = [page - 3, page - 2, ...repeat];
		const first = [3, 4, 5, 6, 7];
		const last = [totalPages - 6, totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2];

		if (page <= totalPages - 4 && page >= 5 && page !== pages[2]) setPages(middle);
		if (page === 4) setPages(fourthFirst);
		if (page === totalPages - 3) setPages(fourthLast);
		if (page === 1) setPages(first);
		if (page === totalPages) setPages(last);

		setCurrentOffset(getOffset(page));
	};

	const nextPage = () => currentOffset < getOffset(totalPages) && handleCurrentOffset(currentPage + 1);
	const prevPage = () => currentOffset > getOffset(1) && handleCurrentOffset(currentPage - 1);

	const paginationFirstCaseData = {
		currentPage,
		pages,
		setCurrentOffset,
		getOffset,
		handleCurrentOffset,
	};
	const paginationSecondCaseData = { currentPage, handleCurrentOffset, pages };
	const paginationThidCaseData = {
		currentPage,
		handleCurrentOffset,
		setCurrentOffset,
		getOffset,
		pages,
		totalPages,
	};
	const paginationFourthCaseData = {
		getOffset,
		setCurrentOffset,
		currentPage,
		totalPages,
	};
	const paginationData = {
		totalRegisters,
		currentPage,
		handleCurrentOffset,
		totalPages,
		nextPage,
		prevPage,
	};

	const PaginationButtons = () => {
		if (totalPages < 10) return <PaginationFourthCase data={paginationFourthCaseData} />;
		if (currentOffset < getOffset(6)) return <PaginationFirstCase data={paginationFirstCaseData} />;
		if (currentOffset >= getOffset(6) && currentOffset <= getOffset(totalPages - 5))
			return <PaginationSecondCase data={paginationSecondCaseData} />;
		if (currentOffset > getOffset(totalPages - 5))
			return <PaginationThidCase data={paginationThidCaseData} />;
	};

	return (
		<div className='pagination-container'>
			<Pagination data={paginationData}>
				<PaginationButtons />
			</Pagination>
		</div>
	);
});
