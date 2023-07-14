import { InputContainer } from '../inputContainer'
import './InputText.css'

export const InputText = ({ col, label, id, register }) => {
  return (
    <InputContainer col={col}>
      <input type="text" {...register} id={id} className='input input-text' />
      {label && <label className='input__label' htmlFor={id}>{label}</label>}
    </InputContainer>
  )
}
