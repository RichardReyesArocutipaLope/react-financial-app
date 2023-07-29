import { InputContainer } from '../InputContainer/InputContainer';
import './InputPassword.css';

export const InputPassword = ({ col, label, name }) => {
	return (
		<InputContainer col={col}>
			<input
				type='password'
				name={name}
				id={name}
				className='input input-password'
			/>
			<label className='input__label' htmlFor={name}>
				{label}
			</label>
		</InputContainer>
	);
};
