import { InputContainer } from '../InputContainer/InputContainer';
import './InputUrl.css';

export const InputUrl = ({ col, label, name }) => {
	return (
		<InputContainer col={col}>
			<input type='url' name={name} id={name} className='input input-url' />
			{label && (
				<label className='input__label' htmlFor={name}>
					{label}
				</label>
			)}
		</InputContainer>
	);
};
