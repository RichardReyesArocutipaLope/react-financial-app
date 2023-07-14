import { InputContainer } from '../inputContainer'
import './InputDate.css'

export const InputDate = ({ col, label, id, register }) => {
  return (
    <InputContainer col={col}>
      <input type="date" {...register} id={id} className='input input-date' />
      <label className='input__label' htmlFor={id}>{label}</label>
    </InputContainer>
  )
}
