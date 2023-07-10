import { InputContainer } from '../inputContainer/InputContainer'
import './InputSelect.css'

export const InputSelect = ({ label, col, id, register, children }) => {

    return (
        <InputContainer col={col}>
            <select className='input input-select' id={id} {...register}>
                {children}
            </select>
            {label && <label className='input__label' htmlFor={id}>{label}</label>}
            <i className="fa-solid fa-caret-down input-select-icon"></i>
        </InputContainer>
    )
}
