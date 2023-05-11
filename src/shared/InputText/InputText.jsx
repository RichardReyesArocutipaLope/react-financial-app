import { InputContainer } from '../InputContainer/InputContainer'
import './InputText.css'

export const InputText = ({ col, label, name }) => {
  return (
    <InputContainer col={col} label={label} name={name}>
      <div className='input__item input-text__container'>
        <input name={name} id={name} className='input input-text' type="text"></input>
      </div>
    </InputContainer>
  )
}
