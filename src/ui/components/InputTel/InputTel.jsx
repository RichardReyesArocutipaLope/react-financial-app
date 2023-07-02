import { InputContainer } from '../InputContainer/InputContainer'
import './InputTel.css'

export const InputTel = ({ col, label, name }) => {
  return (
    <InputContainer col={col}>
      <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="+51 925072688" name={name} id={name}  className='input input-tel' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>
  )
}
