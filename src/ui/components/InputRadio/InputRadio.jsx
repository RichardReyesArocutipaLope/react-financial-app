import { InputContainer } from '../inputContainer';
import './InputRadio.css';

export const InputRadio = ({ col, label, name, id }) => {
	return (
		<InputContainer col={col}>
			<input
				type='radio'
				name={name}
				id={id}
				className='radio-custom'
				style={{ display: 'none' }}
			/>
			<label htmlFor={id} className='radio__label-container'>
				<div className='radio__label-icon'>
					<div className='transition'></div>
				</div>
				<div className='radio__label-text'>{label}</div>
			</label>
		</InputContainer>
	);
};
