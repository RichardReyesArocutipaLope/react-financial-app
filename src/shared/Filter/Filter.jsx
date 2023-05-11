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
        <InputDateRange col={5} label='Rango Date' name='range-date' />
        <InputMoneyRange col={5} label='Rango Prestamo' name='rango-prestamo' />
        <InputMoneyRange col={5} label='Rango Saldo' name='rango-saldo' />
        <InputMoneyRange col={5} label='Rango Saldo' name='rango-saldo' />
        <InputSelect col={4} label='Estado' name='estado' />
      </InputsRow>

      <InputsRow>
        <InputSearch col={6} width='30rem' placeholder='Busque por DNI, Cliente, Analista o Cobrador' />
        <FragmentContainer col={4}>
          <Button width='9.2rem' className='primary' content='Buscar' />
          <Button width='9.2rem' className='dark' content='Limpiar' />
        </FragmentContainer>
        <InputDateRange col={5} label='Rango Date' name='range-date' />
        <InputSelect col={4} label='Estado' name='estado' />
        <FragmentContainer col={5}>
          <Button width='7rem' className='warning' content='Reset' />
          <Button width='5.5rem' className='print-pdf' content={<i class="fa-solid fa-file-pdf icon-pdf"></i>} />
          <Button width='5.5rem' className='print-xlsx' content={<i class="fa-solid fa-file-excel icon-xlsx"></i>} />
          <Button width='5.5rem' className='secondary' content={<i class="fa-solid fa-image icon-capture"></i>} />
        </FragmentContainer>
      </InputsRow>
    </div>
  )
}
