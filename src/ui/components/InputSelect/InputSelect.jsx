import { InputContainer } from '../inputContainer/InputContainer'
import './InputSelect.css'

export const InputSelect = ({ label, col, id, register, children, error }) => {

    return (
        <InputContainer col={col} error={error}>
            <select className={`input input-select ${error ? 'input-error' : ''}`} id={id} {...register}>
                <option value="">No especificado</option>
                {children}
            </select>
            {label && <label className='input__label' htmlFor={id}>{label}</label>}
            <i className="fa-solid fa-caret-down input-select-icon"></i>
        </InputContainer>
    )
}
