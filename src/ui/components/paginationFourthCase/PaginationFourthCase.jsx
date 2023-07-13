import { PaginationButton } from "../paginationButton";

export const PaginationFourthCase = ({ data }) => {
  //! [ <- ]  [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]  [ 7 ]  [ -> ]
  const { getOffset, setCurrentOffset, currentPage, totalPages } = data

  const pages = [];

  for (let index = 2; index <= totalPages; index++) {
    pages.push(index)
  }
  pages.pop();

  return (
    <>
      {pages.map((page) => (
        <PaginationButton key={page}
          currentPage={currentPage}
          page={page}
          funOnClick={() => { setCurrentOffset(getOffset(page)) }}
        />
      ))}
    </>
  )
}
