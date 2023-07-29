import { InputContainer } from '../InputContainer/InputContainer';
import './InputDatalist.css';

export const InputDatalist = ({ col, label, name }) => {
	return (
		<InputContainer col={col}>
			<input list={name} name={name} className='input input-datalist' />
			{label && (
				<label className='input__label' htmlFor={name}>
					{label}
				</label>
			)}
			<datalist id={name}>
				<option value='Internet Explorer' />
				<option value='Firefox' />
				<option value='Chrome' />
				<option value='Opera' />
				<option value='Safari' />
			</datalist>
		</InputContainer>
	);
};
