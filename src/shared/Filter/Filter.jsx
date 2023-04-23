import { Button } from '../Button/Button'
import { FragmentContainer } from '../FragmentContainer/FragmentContainer'
import { InputDateRange } from '../InputDateRange/InputDateRange'
import { InputMoneyRange } from '../InputMoneyRange/InputMoneyRange'
import { InputSearch } from '../InputSearch/InputSearch'
import { InputSelect } from '../InputSelect/InputSelect'
import { InputsRow } from '../InputsRow/InputsRow'
import './Filter.css'

export const Filter = () => {
  return (
    <div className='main-filter'>

      <InputsRow>
        <InputSearch col={4} width='30rem' placeholder='Busque por DNI, Cliente, Analista o Cobrador' />
        <FragmentContainer col={4}>
          <Button width='9rem' className='primary' content='Buscar' />
          <Button width='9rem' className='dark' content='Limpiar' />
        </FragmentContainer>
        <InputSelect col={4} label='Estado' name='estado' />
        <InputDateRange col={4} label='Rango Date' name='range-date' />
        <InputMoneyRange col={4} label='Rango Prestamo' name='rango-prestamo' />
        <InputMoneyRange col={4} label='Rango Saldo' name='rango-saldo' /> 
      </InputsRow>
    </div>
  )
}
