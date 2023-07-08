import { useEffect, useState } from 'react'
import { Filter, ModuleOptions, ModuleTitle, Pagination, Table } from '../../../ui/components';
import { useDispatch } from 'react-redux';
import { startLoadingCredits } from '../../../store/credits/thunks';


export const Credits = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const infoTable = {
    currentPage,
    setCurrentPage,
    totalPages: 500,
    totalRegisters: 5000
  }

  const data={
    searchValue: 'customer',
    state: null,
    dateRangeFirst: null,
    dateRangeLast: null,
    moneyRangeFirst: null,
    moneyRangeLast: null,
    idAnalista: null,
    idCobrador: null
  }

  useEffect(() => {
    dispatch(startLoadingCredits(data))
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
