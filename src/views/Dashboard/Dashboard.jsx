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
import { InputDatalist } from '../../shared/InputDatalist/InputDatalist'
import { InputTextarea } from '../../shared/InputTextarea/InputTextarea'
import { useResponsiveForm } from '../../hooks/useResponsiveForm'

export const Dashboard = () => {

  const initialResponsive = [
    { name: 'inputChekbox', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputColor', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputDate', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputDateTime', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputEmail', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputMonth', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputNumber', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputPassword', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputRadio', xxs:24,xs: 12, m: 8, xl: 6, col: 3 },
    { name: 'inputRange', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputTel', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputText', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputTime', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputUrl', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputWeek', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputSelect', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputRangoMoney', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputRangoDate', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputDatalist', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
    { name: 'inputTextarea', xxs:24,xs: 12, m: 8, xl: 6, col: 6 },
  ]

  const { rwd } = useResponsiveForm(initialResponsive);

  return (
    <>
      <InputsRow margin='1.6'>
        <InputChekbox col={rwd.inputChekbox} label='Input checkbox' name='Input-checkbox' />
        <InputColor col={rwd.inputColor} label='Input color' name='Input-color' />
        <InputDate col={rwd.inputDate} label='Input date' name='Input date' />
        <InputDateTime col={rwd.inputDateTime} label='Input datetime' name='Input datetime' />


        <InputEmail col={rwd.inputEmail} label='Input email' name='Input email' />
        <InputMonth col={rwd.inputMonth} label='Input month' name='Input month' />
        <InputNumber col={rwd.inputNumber} label='Input number' name='Input number' />
        <InputPassword col={rwd.inputPassword} label='Input password' name='Input password' />



        <InputRadio col={rwd.inputRadio} label='Input radio' name='Input-radio' id='a' />
        <InputRadio col={rwd.inputRadio} label='Input radio' name='Input-radio' id='b' />
        <InputRange col={rwd.inputRange} label='Input range' name='Input-range' />
        <InputTel col={rwd.inputTel} label='Input tel' name='Input-tel' />
        <InputText col={rwd.inputText} label='Input text' name='Input-text' />


        <InputTime col={rwd.inputTime} label='Input time' name='Input-time' />
        <InputUrl col={rwd.inputUrl} label='Input url' name='Input-url' />
        <InputWeek col={rwd.inputWeek} label='Input week' name='Input-week' />
        <InputSelect col={rwd.inputSelect} label='Input select' name='select' />


        <InputMoneyRange col={rwd.inputRangoMoney} label='Input money range' name='rango-money' />
        <InputDateRange col={rwd.inputRangoDate} label='Input date range' name='rango-date' />
        <InputDatalist col={rwd.inputDatalist} label='Input data list' name='input-datalist' />
        <InputTextarea col={rwd.inputTextarea} label='Textarea' name='textarea' />
      </InputsRow>

      <InputsRow margin='3'>
        <FragmentContainer col={24}>
          <Button width='8.1rem' className='primary' content='Buscar' />
          <Button width='8.1rem' className='secondary' content='second' />
          <Button width='8.1rem' className='success' content='success' />
          <Button width='8.1rem' className='danger' content='danger' />
          <Button width='8.1rem' className='orange' content='orange' />
          <Button width='8.1rem' className='morado' content='morado' />
          <Button width='8.1rem' className='warning' content='warning' />
          <Button width='8.1rem' className='info' content='info' />
          <Button width='8.1rem' className='light' content='light' />
          <Button width='8.1rem' className='dark' content='dark' />
          <Button width='8.1rem' className='gris' content='gris' />
          <Button width='8.1rem' className='print-pdf' content={<i class="fa-solid fa-file-pdf icon"></i>} />
          <Button width='8.1rem' className='print-xlsx' content={<i class="fa-solid fa-file-excel icon"></i>} />
          <Button width='8.1rem' className='print-word' content={<i class="fa-sharp fa-solid fa-file-word icon"></i>} />
          <Button width='8.1rem' className='dark' content={<i class="fa-solid fa-print icon"></i>} />
        </FragmentContainer>
      </InputsRow>
    </>
  )
}
