import { InputContainer } from '../InputContainer/InputContainer'
import './InputNumber.css'

export const InputNumber = ({ label, col, name, money}) => {
  return (
    <InputContainer col={col}>
      <input name={name} id={name}
        className={`input input-number ${money ? 'money' : ''}`}
        type="number"></input>
      {label && <label className='input__label' htmlFor={name}>{label}</label>}
      {money && <div className='input-number__symbol'>S/.</div>}
    </InputContainer>
  )
}