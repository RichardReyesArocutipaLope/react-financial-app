import { InputContainer } from '../InputContainer/InputContainer'
import './InputText.css'

export const InputText = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input type="text" name={name} id={name} className='input input-text'/>
      {label && <label className='input__label' htmlFor={name}>{label}</label>}
    </InputContainer>
  )
}
