import React from 'react'
import './Dashboard.css'
import { InputsRow } from '../../shared/InputsRow/InputsRow'
import { InputDateRange } from '../../shared/InputDateRange/InputDateRange'
import { InputMoneyRange } from '../../shared/InputMoneyRange/InputMoneyRange'
import { InputSelect } from '../../shared/InputSelect/InputSelect'
import { InputText } from '../../shared/InputText/InputText'

export const Dashboard = () => {
  return (
    <>
      <InputsRow>
        <InputDateRange col={6} label='Rango Date' name='range-date' />
        <InputMoneyRange col={6} label='Rango Prestamo' name='rango-prestamo' />
        <InputSelect col={6} label='Estado' name='estado' />
        <InputText col={6} label='Celular 2' name='cobrador' />
      </InputsRow>
      
    </>
  )
}
