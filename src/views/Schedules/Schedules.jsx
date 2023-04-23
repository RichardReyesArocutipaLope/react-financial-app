import React from 'react'
import './Schedules.css'
import { Table } from '../../shared/Table/Table'
import { InputChekbox } from '../../shared/InputCheckbox/InputChekbox'
import { ModuleOptions } from '../../shared/ModuleOptions/ModuleOptions'
import { Filter } from '../../shared/Filter/Filter'
import { Paginacion } from '../../shared/Paginacion/Paginacion'

export const Schedules = () => {
  return (
    <div className='xd'>
      <h1 className='main-title'>Créditos</h1>
      {/* <HeaderModule/> */}
      <ModuleOptions />
      <Filter />
      <Table />
      <Paginacion />
    </div>
  )
}
