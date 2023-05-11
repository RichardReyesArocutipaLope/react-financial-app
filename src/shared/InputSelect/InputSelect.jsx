import { InputContainer } from '../InputContainer/InputContainer'
import './InputSelect.css'

export const InputSelect = ({ label, col, name }) => {

    return (
        <InputContainer col={col} label={label} name={name}>
            <div className='input__item input-select__container'>
                <div name={name} id={name} className='input input-select'>
                    No especificado
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <div className='content-select'>

                </div>
            </div>
        </InputContainer>
    )
}
