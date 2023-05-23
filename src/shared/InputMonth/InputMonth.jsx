import { InputContainer } from '../InputContainer/InputContainer'
import './InputMonth.css'

export const InputMonth = ({ col, label, name, minWidth }) => {
  return (
    <InputContainer col={col} minWidth={minWidth}>
      <input type="month" name={name} id={name} className='input input-month' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}
