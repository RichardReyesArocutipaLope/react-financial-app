import { useResponsiveForm } from '../../hooks/useResponsiveForm'
import { Button } from '../Button/Button'
import { FragmentContainer } from '../FragmentContainer/FragmentContainer'
import { InputDateRange } from '../InputDateRange/InputDateRange'
import { InputMoneyRange } from '../InputMoneyRange/InputMoneyRange'
import { InputSearch } from '../InputSearch/InputSearch'
import { InputSelect } from '../InputSelect/InputSelect'
import { InputsRow } from '../InputsRow/InputsRow'
import './Filter.css'

export const Filter = () => {

  const initialResponsive = [
    { name: 'filter', xxs: 24, s: 12, m: 12, l: 8, xl: 6, xxl: 6, col: 6 },
    { name: 'search', xxs: 24, s: 24, m: 24, l: 16, xl: 8, xxl: 8, col: 6 },
    { name: 'buttons', xxs: 24, s: 24, m: 24, l: 24, xl: 16, xxl: 16, col: 6 },
  ]

  const { rwd, centinela } = useResponsiveForm(initialResponsive);

  return (
    <div className='main-filter'>

      <InputsRow margin='.5'>
        {
          centinela > 1024 &&
          <>
            <InputDateRange col={rwd.filter} label='Rango Date' name='range-date' />
            <InputMoneyRange col={rwd.filter} label='Rango Prestamo' name='rango-prestamo' />
            <InputMoneyRange col={rwd.filter} label='Rango Saldo' name='rango-saldo1' />
            <InputSelect col={rwd.filter} label='Estado' name='estado' />
          </>
        }

        <InputSearch col={rwd.search} width='30rem' placeholder='Busque por DNI, Cliente, Analista o Cobrador' />

        <FragmentContainer col={rwd.buttons} justifyContent={`${centinela <= 1024 ? 'center' : 'start'}`}>
          <Button width='8rem' className='primary' content='Buscar' />
          <Button width='8rem' className='dark' content='Limpiar' />

          {
            centinela > 1024 &&
            <>
              <Button width='6rem' className='warning' content='Reset' />
              <Button width='5rem' className='print-pdf' content={<i class="fa-solid fa-file-pdf icon"></i>} />
              <Button width='5rem' className='print-xlsx' content={<i class="fa-solid fa-file-excel icon"></i>} />
              <Button width='5rem' className='secondary' content={<i class="fa-solid fa-image icon"></i>} />
            </>
          }

          {centinela <= 1024 && <Button width='4rem' className='info' content={<i class="fa-solid fa-filter icon"></i>} />}
        </FragmentContainer>
      </InputsRow>

    </div>
  )
}
