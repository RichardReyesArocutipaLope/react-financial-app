import { Button, FragmentContainer } from '../../../ui/components';

export const OptionsApproveCredit = ({ setIsOpenModal, setModalReset, setModalSubmit }) => {
	const handleModal = () => setIsOpenModal(false);
	const onSubmit = () => setModalSubmit(state => state + 1);

	return (
		<FragmentContainer justifyContent='center' gap='.9rem'>
			<Button width='10rem' className='success' content='Aprobar' event={onSubmit} />
			<Button width='10rem' className='danger' content='Cancelar' event={handleModal} />
		</FragmentContainer>
	);
};
