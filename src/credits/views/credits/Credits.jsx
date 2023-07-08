import { useEffect, useState } from 'react'
import { Filter, ModuleOptions, ModuleTitle, Pagination, Table } from '../../../ui/components';


export const Credits = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const infoTable = {
    currentPage,
    setCurrentPage,
    totalPages: 500,
    totalRegisters: 5000
  }
  
  useEffect(() => {

  }, [])

  return (
    <>
      <ModuleTitle text='Créditos' />
      <ModuleOptions />
      <Filter />
      <Table />
      <Pagination infoTable={infoTable} />
    </>
  )
}
