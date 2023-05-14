import React, { useState } from 'react'
import './Schedules.css'
import { Table } from '../../shared/Table/Table'
import { InputChekbox } from '../../shared/InputCheckbox/InputChekbox'
import { ModuleOptions } from '../../shared/ModuleOptions/ModuleOptions'
import { Filter } from '../../shared/Filter/Filter'
import { Paginacion } from '../../shared/Paginacion/Paginacion'
import { ModuleTitle } from '../../shared/ModuleTitle/ModuleTitle'

export const Schedules = ({handleModal}) => {

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
      <Paginacion infoTable={infoTable} />
    </>
  )
}
