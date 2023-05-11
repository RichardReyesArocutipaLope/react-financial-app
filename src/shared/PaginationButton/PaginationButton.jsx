import './PaginationButton.css'

export const PaginationButton = ({
    isNumber,
    pageActual,
    numPage,
    funOnClick,
    labelText,
    totalPages=0,
    selectPage=() => {},
}) => {
  return (
    <span
      className={`pagination-button ${
        isNumber ? "pagination-button--number" : "pagination-button--arrow"
      } ${numPage == pageActual ? "active" : ""}`}
      onClick={funOnClick}
    >
      {labelText}
    </span>
  )
}
