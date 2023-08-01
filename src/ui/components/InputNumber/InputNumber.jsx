import { InputContainer } from '../inputContainer';
import './InputNumber.css';

export const InputNumber = ({ label = 'label', col, register, money, error, required = false }) => {
	const id = label.replace(/\s+/g, '').toLowerCase();
	return (
		<InputContainer col={col} error={error}>
			<input
				{...register}
				id={id}
				className={`input input-number ${money ? 'money' : ''} ${error ? 'input-error' : ''}`}
				type='number'></input>
			{label && (
				<label className='input__label' htmlFor={id}>
					{label} {required && <span>*</span>}
				</label>
			)}
			{money && <div className='input-number__symbol'>S/.</div>}
		</InputContainer>
	);
};
