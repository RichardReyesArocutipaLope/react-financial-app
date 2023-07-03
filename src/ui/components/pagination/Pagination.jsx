import { PaginationButton } from '../paginationButton/PaginationButton';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Pagination.css'
import { Fragment, useState } from 'react';

export const Pagination = ({ infoTable }) => {

  const { currentPage, setCurrentPage, totalPages, totalRegisters } = infoTable;

  const pagination = [
    {
      id: 1,
      number: <FaArrowLeft />,
      isNumber: false,
      typeButton: 'icon',
      action: "prev",
    },
    {
      id: 2,
      number: 1,
      isNumber: true,
      typeButton: 'number',
      action: "selectPage",
    },
    {
      id: 3,
      number: "groupPages",
      isNumber: "",
      typeButton: "",
      action: "selectPage",
    },
    {
      id: 4,
      number: totalPages,
      isNumber: true,
      typeButton: 'number',
      action: "selectPage",
    },
    {
      id: 5,
      number: <FaArrowRight />,
      isNumber: false,
      typeButton: 'icon',
      action: "next",
    },
  ];

  let pageActual = (currentPage + 10) / 10;
  const [pages, setPages] = useState([
    pageActual + 2,
    pageActual + 3,
    pageActual + 4,
    pageActual + 5,
    pageActual + 6,
  ]);

  const goPage = (num) => {
    return num * 10 - 10;
  };

  //=======================================

  const nextPage = () => {
    console.log(currentPage)
    if (currentPage < goPage(totalPages)) {
      fnPaginationTwo(pageActual + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > goPage(1)) {
      fnPaginationTwo(pageActual - 1);
    }
  };

  //=======================================

  const fnPaginationTwo = (numPage) => {
    if (numPage <= totalPages - 4 && numPage >= 5 && numPage != pages[2]) {
      setPages([numPage - 2, numPage - 1, numPage, numPage + 1, numPage + 2]);
    }
    if (numPage == 4) {
      setPages([numPage - 1, numPage, numPage + 1, numPage + 2, numPage + 3]);
    }
    if (numPage == totalPages - 3) {
      setPages([numPage - 3, numPage - 2, numPage - 1, numPage, numPage + 1]);

    }
    setCurrentPage(goPage(numPage));
  };

  //=======================================
  const selectFirstLastPage = (number) => {
    setCurrentPage(number * 10 - 10);
    if (number == 1) {
      setPages([3, 4, 5, 6, 7]);
    } else {
      setPages([
        totalPages - 6,
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
      ]);
    }
  };

  const fnPaginationOne = (typeButton, number, action) => {
    switch (typeButton) {
      case 'number':
        selectFirstLastPage(number);
        break;
      case 'icon':
        if (action == "next") {
          nextPage();
        } else {
          prevPage();
        }
        break;

      default:
        break;
    }
  };
  //=======================================

  return (
    <div className="pagination-container">
      <p className='pagination-info'>{`Se encontraron ${totalRegisters} registros`}</p>
      <div className='pagination'>
        {pagination.map(({ number, isNumber, typeButton, action, id }) => {
          if (number == "groupPages") {
            if (currentPage < goPage(6)) {
              return (
                <Fragment key={id}>
                  <PaginationButton
                    isNumber={isNumber}
                    pageActual={pageActual}
                    numPage={2}
                    labelText={2}
                    funOnClick={() => {
                      setCurrentPage(goPage(2));
                    }}
                  />
                  {pages.map((numPage) => (
                    <PaginationButton
                      isNumber={isNumber}
                      pageActual={pageActual}
                      numPage={numPage}
                      labelText={numPage}
                      funOnClick={() => {
                        fnPaginationTwo(numPage);
                      }}
                    />
                  ))}
                  <PaginationButton
                    isNumber={isNumber}
                    pageActual={pageActual}
                    numPage={""}
                    labelText={"..."}
                    funOnClick={() => { }}
                  />
                </Fragment>
              );
            } else if (
              currentPage >= goPage(6) &&
              currentPage <= goPage(totalPages - 5)
            ) {
              return (
                <>
                  <PaginationButton
                    isNumber={isNumber}
                    pageActual={pageActual}
                    numPage={""}
                    labelText="..."
                    funOnClick={() => { }}
                  />
                  {pages.map((numPage) => (
                    <PaginationButton
                      isNumber={isNumber}
                      pageActual={pageActual}
                      numPage={numPage}
                      labelText={numPage}
                      funOnClick={() => {
                        fnPaginationTwo(numPage);
                      }}
                    />
                  ))}
                  <PaginationButton
                    isNumber={isNumber}
                    pageActual={pageActual}
                    numPage={""}
                    labelText="..."
                    funOnClick={() => { }}
                  />
                </>
              );
            } else if (currentPage > goPage(totalPages - 5)) {

              return (
                <Fragment key={id}>
                  <PaginationButton
                    isNumber={isNumber}
                    pageActual={pageActual}
                    numPage={""}
                    labelText={"..."}
                    funOnClick={() => { }}
                  />
                  {pages.map((numPage) => (
                    <PaginationButton
                      isNumber={isNumber}
                      pageActual={pageActual}
                      numPage={numPage}
                      labelText={numPage}
                      funOnClick={() => {
                        fnPaginationTwo(numPage);
                      }}
                    />
                  ))}
                  <PaginationButton
                    isNumber={isNumber}
                    pageActual={pageActual}
                    numPage={totalPages - 1}
                    labelText={totalPages - 1}
                    funOnClick={() => {
                      setCurrentPage(goPage(totalPages - 1));
                    }}
                  />
                </Fragment>
              );
            }
          } else {
            return (
              <PaginationButton
                key={id}
                isNumber={isNumber}
                pageActual={pageActual}
                numPage={number}
                labelText={number}
                funOnClick={() => {
                  fnPaginationOne(typeButton, number, action);
                }}
              />
            );
          }
        })}
      </div>
    </div>
  )
}
