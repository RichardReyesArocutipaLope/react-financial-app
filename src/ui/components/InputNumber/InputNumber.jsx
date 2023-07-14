import { InputContainer } from '../inputContainer'
import './InputNumber.css'

export const InputNumber = ({ label, col, id, register, money}) => {
  return (
    <InputContainer col={col}>
      <input {...register} id={id}
        className={`input input-number ${money ? 'money' : ''}`}
        type="number"></input>
      {label && <label className='input__label' htmlFor={id}>{label}</label>}
      {money && <div className='input-number__symbol'>S/.</div>}
    </InputContainer>
  )
}
