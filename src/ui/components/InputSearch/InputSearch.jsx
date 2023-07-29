import { InputContainerHorizontal } from '../inputContainerHorizontal/InputContainerHorizontal';
import './InputSearch.css';

export const InputSearch = ({ placeholder = 'Buscar', register, col }) => {
	return (
		<InputContainerHorizontal col={col}>
			<div className='input__item'>
				<input
					type='text'
					className='input search__input '
					placeholder={placeholder}
					{...register}
				/>
			</div>
		</InputContainerHorizontal>
	);
};
