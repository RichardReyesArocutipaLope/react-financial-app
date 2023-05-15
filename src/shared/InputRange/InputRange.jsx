import { InputContainer } from '../InputContainer/InputContainer'
import './InputRange.css'

export const InputRange = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input type="range" name={name} id={name} className='input-range' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}
