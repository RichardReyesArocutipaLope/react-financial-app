import { InputContainer } from '../InputContainer/InputContainer'
import './InputSelect.css'

export const InputSelect = ({ label, col, name }) => {

    return (
        <InputContainer col={col}>
            <div name={name} id={name} className='select'>
                No especificado
                <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className='content-select'>

            </div>
            <label className='input__label' htmlFor={name}>{label}</label>
        </InputContainer>
    )
}
