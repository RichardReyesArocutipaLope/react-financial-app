import { InputContainer } from '../inputContainer/InputContainer'
import './InputDateRange.css'

export const InputDateRange = ({ label, col, name }) => {
    return (
        <InputContainer col={col} >
            <div className='input__item input-date__range-container'>
                <input type="date" className='input input-date__range' />
                <input type="date" className='input input-date__range' />
            </div>
            {label && <label className='input__label' htmlFor={name}>{label}</label>}
        </InputContainer>
    )
}
