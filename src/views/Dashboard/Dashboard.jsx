import React from 'react'
import './Dashboard.css'
import { InputsRow } from '../../shared/InputsRow/InputsRow'
import { InputDateRange } from '../../shared/InputDateRange/InputDateRange'
import { InputMoneyRange } from '../../shared/InputMoneyRange/InputMoneyRange'
import { InputSelect } from '../../shared/InputSelect/InputSelect'
import { InputText } from '../../shared/InputText/InputText'
import { InputChekbox } from '../../shared/InputCheckbox/InputChekbox'
import { InputColor } from '../../shared/InputColor/InputColor'
import { InputDate } from '../../shared/InputDate/InputDate'
import { InputDateTime } from '../../shared/InputDateTime/InputDateTime'
import { InputEmail } from '../../shared/InputEmail/InputEmail'
import { InputMonth } from '../../shared/InputMonth/InputMonth'
import { InputNumber } from '../../shared/InputNumber/InputNumber'
import { InputPassword } from '../../shared/InputPassword/InputPassword'
import { InputRadio } from '../../shared/InputRadio/InputRadio'
import { InputRange } from '../../shared/InputRange/InputRange'
import { InputTel } from '../../shared/InputTel/InputTel'
import { InputTime } from '../../shared/InputTime/InputTime'
import { InputUrl } from '../../shared/InputUrl/InputUrl'
import { InputWeek } from '../../shared/InputWeek/InputWeek'
import { Button } from '../../shared/Button/Button'
import { FragmentContainer } from '../../shared/FragmentContainer/FragmentContainer'

export const Dashboard = () => {
  return (
    <>
      <InputsRow margin='1.6'>
        <InputChekbox col={6} label='Input checkbox' name='Input checkbox' />
        <InputColor col={6} label='Input color' name='Input color' />
        <InputDate col={6} label='Input date' name='Input date' />
        <InputDateTime col={6} label='Input datetime' name='Input datetime' />
      </InputsRow>

      <InputsRow margin='1.6'>
        <InputEmail col={6} label='Input email' name='Input email' />
        <InputMonth col={6} label='Input month' name='Input month' />
        <InputNumber col={6} label='Input number' name='Input number' />
        <InputPassword col={6} label='Input password' name='Input password' />
      </InputsRow>

      <InputsRow margin='1.6'>
        <InputRadio col={3} label='Input radio' name='Input-radio' id='a' />
        <InputRadio col={3} label='Input radio' name='Input-radio' id='b' />
        <InputRange col={6} label='Input range' name='Input-range' />
        <InputTel col={6} label='Input tel' name='Input-tel' />
        <InputText col={6} label='Input text' name='Input-text' />
      </InputsRow>

      <InputsRow margin='1.6'>
        <InputTime col={6} label='Input time' name='Input-time' />
        <InputUrl col={6} label='Input url' name='Input-url' />
        <InputWeek col={6} label='Input week' name='Input-week' />
        <InputSelect col={6} label='Input select' name='select' />
      </InputsRow>

      <InputsRow margin='1.6'>
        <InputMoneyRange col={6} label='Input money range' name='rango-money' />
        <InputDateRange col={6} label='Input date range' name='rango-date' />
      </InputsRow>

      <InputsRow margin='3'>
        <FragmentContainer col={24}>
          <Button width='9.2rem' className='primary' content='Buscar' />
          <Button width='9.2rem' className='secondary' content='secondary' />
          <Button width='9.2rem' className='success' content='success' />
          <Button width='9.2rem' className='danger' content='danger' />
          <Button width='9.2rem' className='morado' content='morado' />
          <Button width='9.2rem' className='warning' content='warning' />
          <Button width='9.2rem' className='info' content='info' />
          <Button width='9.2rem' className='light' content='light' />
          <Button width='9.2rem' className='dark' content='dark' />
          <Button width='9.2rem' className='gris' content='gris' />
          <Button width='9.2rem' className='print-pdf' content={<i class="fa-solid fa-file-pdf icon"></i>}/>
          <Button width='9.2rem' className='print-xlsx' content={<i class="fa-solid fa-file-excel icon"></i>}/>
          <Button width='9.2rem' className='print-word' content={<i class="fa-sharp fa-solid fa-file-word icon"></i>}/>
        </FragmentContainer>
      </InputsRow>

    </>
  )
}
