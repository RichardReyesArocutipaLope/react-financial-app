import { PaginationButton } from '../paginationButton';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Pagination = ({ data, children }) => {
	//! [ <- ]  [ 1 ] ......  [ 20 ]  [ -> ]
	const {
		totalRegisters,
		currentPage,
		handleCurrentOffset,
		totalPages,
		nextPage,
		prevPage,
	} = data;

	console.log('Pagination..jsx');

	return (
		<>
			<p className='pagination-info'>{`Se encontraron ${totalRegisters} registros`}</p>
			<div className='pagination'>
				<PaginationButton
					currentPage={currentPage}
					page={<FaArrowLeft />}
					funOnClick={() => {
						prevPage();
					}}
				/>
				<PaginationButton
					currentPage={currentPage}
					page={1}
					funOnClick={() => {
						handleCurrentOffset(1);
					}}
				/>
				{totalPages > 1 ? (
					<>
						{' '}
						{children}
						<PaginationButton
							currentPage={currentPage}
							page={totalPages}
							funOnClick={() => {
								handleCurrentOffset(totalPages);
							}}
						/>
					</>
				) : (
					<></>
				)}
				<PaginationButton
					currentPage={currentPage}
					page={<FaArrowRight />}
					funOnClick={() => {
						nextPage();
					}}
				/>
			</div>
		</>
	);
};
