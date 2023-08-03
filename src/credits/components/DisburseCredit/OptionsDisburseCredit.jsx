import { Button, FragmentContainer } from '../../../ui/components';

export const OptionsDisburseCredit = ({ setIsOpenModal, setModalReset, setModalSubmit }) => {
	const handleModal = () => setIsOpenModal(false);
	const onSubmit = () => setModalSubmit(state => state + 1);

	return (
		<FragmentContainer justifyContent='center' gap='.9rem'>
			<Button width='10.5rem' className='success' content='Desembolsar' event={onSubmit} />
			<Button width='9rem' className='danger' content='Cancelar' event={handleModal} />
		</FragmentContainer>
	);
};
