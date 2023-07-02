import { InputContainer } from '../InputContainer/InputContainer'
import './InputTextarea.css'

export const InputTextarea = ({ col, label, name }) => {
    return (
        <InputContainer col={col}>
            <textarea name={name} id={name} rows="1" cols="10" className='input input-text'></textarea>
            {label && <label className='input__label' htmlFor={name}>{label}</label>}
        </InputContainer>
    )
}
