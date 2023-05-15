import './InputDate.css'
import { InputContainer } from '../InputContainer/InputContainer'

export const InputDate = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input type="date" name={name} id={name} className='input input-date' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}
