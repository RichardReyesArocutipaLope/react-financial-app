import { InputContainer } from '../InputContainer/InputContainer'
import './InputMonth.css'

export const InputMonth = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input type="month" name={name} id={name} className='input input-month' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}
