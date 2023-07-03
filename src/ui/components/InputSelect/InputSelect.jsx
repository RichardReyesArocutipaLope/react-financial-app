import { InputContainer } from '../inputContainer/InputContainer'
import './InputSelect.css'

export const InputSelect = ({ label, col, name }) => {

    return (
        <InputContainer col={col}>
            <select className='input input-select' name={name} id={name} >
                <option value="value1">No especificado</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
            </select>
            {label && <label className='input__label' htmlFor={name}>{label}</label>}
            <i className="fa-solid fa-caret-down input-select-icon"></i>
        </InputContainer>
    )
}
