import { InputContainer } from '../InputContainer/InputContainer'
import './InputText.css'

export const InputText = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input name={name} id={name} className='input input-text' type="text"></input>
      {label && <label className='input__label' htmlFor={name}>{label}</label>}
    </InputContainer>
  )
}
