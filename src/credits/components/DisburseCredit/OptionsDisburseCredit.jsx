import { Button, FragmentContainer } from '../../../ui/components';

export const OptionsDisburseCredit = ({ onCloseModal, setModalReset, setModalSubmit }) => {
	const handleModal = () => onCloseModal();
	const onSubmit = () => setModalSubmit(state => state + 1);

	return (
		<FragmentContainer justifyContent='center' gap='.9rem'>
			<Button width='10.5rem' className='success' content='Desembolsar' event={onSubmit} />
			<Button width='9rem' className='danger' content='Cancelar' event={handleModal} />
		</FragmentContainer>
	);
};
