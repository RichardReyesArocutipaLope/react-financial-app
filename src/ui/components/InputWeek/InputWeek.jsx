import { InputContainer } from '../InputContainer/InputContainer';
import './InputWeek.css';

export const InputWeek = ({ col, label, name }) => {
	return (
		<InputContainer col={col}>
			<input type='week' name={name} id={name} className='input input-week' />
			{label && (
				<label className='input__label' htmlFor={name}>
					{label}
				</label>
			)}
		</InputContainer>
	);
};
