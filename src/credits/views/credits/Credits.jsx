import { useState } from 'react'
import { Filter, ModuleOptions, ModuleTitle, Pagination, Table } from '../../../ui/components';

export const Credits = ({handleModal}) => {

  const [currentPage, setCurrentPage] = useState(0);

  const infoTable = {
    currentPage,
    setCurrentPage,
    totalPages: 500,
    totalRegisters: 5000
  }

  return (
    <>
      <ModuleTitle text='Créditos' />
      <ModuleOptions handleModal={handleModal} />
      <Filter />
      <Table />
      <Pagination infoTable={infoTable} />
    </>
  )
}
