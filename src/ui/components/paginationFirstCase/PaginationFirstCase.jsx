import { PaginationButton } from "../paginationButton"

export const PaginationFirstCase = ({ data }) => {
    //! [ <- ]  [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]  [ 7 ]  [...]  [ 20 ]  [ -> ]
    const { currentPage, pages, setCurrentOffset, getOffset, handleCurrentOffset } = data
    return (
        <>
            <PaginationButton
                currentPage={currentPage}
                page={2}
                funOnClick={() => { setCurrentOffset(getOffset(2)) }}
            />
            {pages.map((page) => (
                <PaginationButton key={page}
                    currentPage={currentPage}
                    page={page}
                    funOnClick={() => { handleCurrentOffset(page) }}
                />
            ))}
            <PaginationButton currentPage={currentPage} page="..." />
        </>
    )
}
