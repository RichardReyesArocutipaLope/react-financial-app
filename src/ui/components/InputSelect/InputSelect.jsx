import { InputContainer } from '../inputContainer/InputContainer';
import './InputSelect.css';

export const InputSelect = ({ label = 'label', col, register, children, error, required = false }) => {
	const id = label.replace(/\s+/g, '').toLowerCase();
	return (
		<InputContainer col={col} error={error}>
			<select className={`input input-select ${error ? 'input-error' : ''}`} id={id} {...register}>
				<option value=''>No especificado</option>
				{children}
			</select>
			{label && (
				<label className='input__label' htmlFor={id}>
					{label} {required && <span>*</span>}
				</label>
			)}
			<i className='fa-solid fa-caret-down input-select-icon'></i>
		</InputContainer>
	);
};
