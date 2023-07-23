import { useResponsiveForm } from '../../../hooks';
import {
  Button, FragmentContainer, InputChekbox, InputColor, InputDatalist, InputDate, InputDateRange, InputDateTime,
  InputEmail, InputMoneyRange, InputMonth, InputNumber, InputPassword, InputRadio, InputRange, InputSelect,
  InputTel, InputText, InputTextarea, InputTime, InputUrl, InputWeek, InputsRow
} from '../../../ui/components';

export const Dev = () => {

  const initialResponsive = [
    { name: 'inputChekbox', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputColor', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputDate', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputDateTime', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputEmail', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputMonth', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputNumber', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputPassword', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputRadio', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 3 },
    { name: 'inputRange', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputTel', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputText', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputTime', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputUrl', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputWeek', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputSelect', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputRangoMoney', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputRangoDate', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputDatalist', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
    { name: 'inputTextarea', xxs: 24, s: 12, m: 8, l: 6, xl: 4.8, xxl: 4, col: 6 },
  ]

  const { rwd } = useResponsiveForm(initialResponsive);

  return (
    <>
      <InputsRow margin='0'>
        <InputColor col={rwd.inputColor} label='Input color' name='Input-color' />
        <InputChekbox col={rwd.inputChekbox} label='Input checkbox' id='Input-checkbox' />
        <InputDate col={rwd.inputDate} label='Input date' id='Input date' />
        <InputDateTime col={rwd.inputDateTime} label='Input datetime' name='Input datetime' />

        <InputEmail col={rwd.inputEmail} label='Input email' name='Input email' />
        <InputMonth col={rwd.inputMonth} label='Input month' name='Input month' />
        <InputNumber col={rwd.inputNumber} label='Input number' name='Input number' />
        <InputPassword col={rwd.inputPassword} label='Input password' name='Input password' />

        <InputRadio col={rwd.inputRadio} label='Input radio' name='Input-radio' id='a' />
        <InputRadio col={rwd.inputRadio} label='Input radio' name='Input-radio' id='b' />
        <InputRange col={rwd.inputRange} label='Input range' name='Input-range' />
        <InputTel col={rwd.inputTel} label='Input tel' name='Input-tel' />
        <InputText col={rwd.inputText} label='Input text' id='Input-text' />

        <InputTime col={rwd.inputTime} label='Input time' name='Input-time' />
        <InputUrl col={rwd.inputUrl} label='Input url' name='Input-url' />
        <InputWeek col={rwd.inputWeek} label='Input week' name='Input-week' />
        <InputSelect col={rwd.inputSelect} label='Input select' id='select' />

        <InputMoneyRange col={rwd.inputRangoMoney} label='Input money range' name='rango-money' />
        <InputDateRange col={rwd.inputRangoDate} label='Input date range' id='rango-date' />
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
          <Button width='8.1rem' className='print-pdf' content={<i className="fa-solid fa-file-pdf icon"></i>} />
          <Button width='8.1rem' className='print-xlsx' content={<i className="fa-solid fa-file-excel icon"></i>} />
          <Button width='8.1rem' className='print-word' content={<i className="fa-sharp fa-solid fa-file-word icon"></i>} />
          <Button width='8.1rem' className='dark' content={<i className="fa-solid fa-print icon"></i>} />
        </FragmentContainer>
      </InputsRow>
    </>
  )
}
