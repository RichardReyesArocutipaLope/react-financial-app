import { InputContainer } from '../inputContainer/InputContainer';
import './InputDateRange.css';

export const InputDateRange = ({ label, col, registerFrom, registerTo }) => {
	return (
		<InputContainer col={col}>
			<div className='input__item input-date__range-container'>
				<input
					type='date'
					className='input input-date__range'
					{...registerFrom}
				/>
				<input
					type='date'
					className='input input-date__range'
					{...registerTo}
				/>
			</div>
			{label && <label className='input__label'>{label}</label>}
		</InputContainer>
	);
};
