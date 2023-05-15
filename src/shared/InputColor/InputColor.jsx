import { InputContainer } from '../InputContainer/InputContainer'
import './InputColor.css'

export const InputColor = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input type="color" name={name} id={name} className='input input-color' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}