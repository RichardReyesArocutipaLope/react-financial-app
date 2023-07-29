import { useDispatch } from 'react-redux';
import { Button, FragmentContainer } from '../../../ui/components';
import { setSubmitCreditCreateForm } from '../../../store/credits/creditsOptionsSlice';

export const OptionsDisburseCredit = ({ setIsOpenModal }) => {
	const handleModal = () => {
		setIsOpenModal(false);
	};

	const dispatch = useDispatch();
	const onSubmit = () => {
		dispatch(setSubmitCreditCreateForm(true));
	};

	return (
		<FragmentContainer justifyContent='center' gap='.9rem'>
			<Button
				width='10.5rem'
				className='success'
				content='Desembolsar'
				event={onSubmit}
			/>
			<Button
				width='9rem'
				className='danger'
				content='Cancelar'
				event={handleModal}
			/>
		</FragmentContainer>
	);
};
