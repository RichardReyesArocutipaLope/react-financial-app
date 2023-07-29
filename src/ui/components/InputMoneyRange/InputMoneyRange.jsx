import { InputContainer } from '../inputContainer/InputContainer';
import './InputMoneyRange.css';

export const InputMoneyRange = ({ label, col, registerFrom, registerTo }) => {
	return (
		<InputContainer col={col}>
			<div className='input__item input-number__range-container'>
				<div className='input-number__symbol'>S/.</div>
				<div className='input-number__symbol'>S/.</div>
				<input
					type='number'
					className='input input-number__range'
					step='0.01'
					min='0'
					max='10000000'
					{...registerFrom}
				/>
				<input
					type='number'
					className='input input-number__range'
					step='0.01'
					min='0'
					max='10000000'
					{...registerTo}
				/>
			</div>
			{label && <label className='input__label'>{label}</label>}
		</InputContainer>
	);
};
