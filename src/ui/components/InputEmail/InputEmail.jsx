import './InputEmail.css';
import { InputContainer } from '../InputContainer/InputContainer';

export const InputEmail = ({ col, label, name }) => {
	return (
		<InputContainer col={col}>
			<input type='email' name={name} id={name} className='input input-email' />
			{label && (
				<label className='input__label' htmlFor={name}>
					{label}
				</label>
			)}
		</InputContainer>
	);
};
