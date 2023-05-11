import { InputContainer } from '../InputContainer/InputContainer'
import './InputNumber.css'

export const InputNumber = ({ label, col, name, money }) => {
  return (
    <InputContainer col={col} label={label} name={name}>
      <div className='input__item input-number__container'>
        {money && <div className='input-number__symbol'>S/.</div>}
        <input name={name} id={name}
          className={`input input-number ${money?'money':''}`}
          type="number"></input>
      </div>
    </InputContainer>
  )
}
