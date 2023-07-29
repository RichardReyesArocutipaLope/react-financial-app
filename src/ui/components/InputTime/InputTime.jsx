import { InputContainer } from '../InputContainer/InputContainer';
import './InputTime.css';

export const InputTime = ({ col, label, name }) => {
	return (
		<InputContainer col={col}>
			<input type='time' name={name} id={name} className='input input-time' />
			{label && (
				<label className='input__label' htmlFor={name}>
					{label}
				</label>
			)}
		</InputContainer>
	);
};
