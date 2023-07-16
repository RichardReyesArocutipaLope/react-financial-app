import { InputContainer } from '../inputContainer'
import './InputDate.css'

export const InputDate = ({ col, label, id, register, error }) => {
  return (
    <InputContainer col={col} error={error}>
      <input type="date" {...register} id={id} className={`input input-date ${error?'input-error':''}`} />
      <label className='input__label' htmlFor={id}>{label}</label>
    </InputContainer>
  )
}
