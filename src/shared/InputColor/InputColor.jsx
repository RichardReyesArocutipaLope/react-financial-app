import { InputContainer } from '../InputContainer/InputContainer'
import './InputColor.css'

export const InputColor = ({ col, label, name, minWidth }) => {
  return (
    <InputContainer col={col} minWidth={minWidth}>
      <input type="color" name={name} id={name} className='input input-color' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}