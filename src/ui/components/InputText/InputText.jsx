import { InputContainer } from '../inputContainer';
import './InputText.css';

export const InputText = ({ col, label, id, register, error, required = false, displayNone }) => {
	return (
		<InputContainer col={col} error={error} displayNone={displayNone}>
			<input type='text' {...register} id={id} className={`input input-text ${error ? 'input-error' : ''}`} />
			{label && (
				<label className='input__label' htmlFor={id}>
					{label} {required && <span>*</span>}
				</label>
			)}
		</InputContainer>
	);
};
