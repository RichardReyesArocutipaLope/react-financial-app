import { Button, FragmentContainer } from '../../../ui/components';

export const OptionsCreateCredit = ({ setIsOpenModal, openAnotherModal, setModalReset, setModalSubmit }) => {
	const handleModal = () => setIsOpenModal(false);
	const onSubmit = () => setModalSubmit(state => state + 1);
	const onClean = () => setModalReset(state => state + 1);

	return (
		<FragmentContainer justifyContent='center' gap='.5rem'>
			<Button width='10rem' className='dark' content='Limpiar' event={onClean} />
			<Button width='10rem' className='success' content='Guardar' event={onSubmit} />
			<Button width='10rem' className='danger' content='Cancelar' event={handleModal} />
			<Button width='10rem' className='info' content='Visualizar' />
			<Button width='10rem' className='gris' content='Cronograma' />
			{/* <Button width='10rem' className='gris' content='Cronograma' event={handleCronogramaModal} /> */}
		</FragmentContainer>
	);
};

// TODO: INCORPORAR LOS MODALES DE VISUALIZAR FICHA Y CRONOGRAMA :( EL PROBLEMA SOLO ES EL MODAL PERO LUEGO NOMAS, PRIMERO
// todo: ACABARE CON EL CRUD

// const handleCronogramaModal = () => {
// 	const modalProperties = {
// 		width: 'modal-l',
// 		heightBody: '100%',
// 		bodyHeightClass: 'modal__body--responsive',
// 		staticBackdrop: false,
// 		scroll: true,
// 		verticallyCentered: false,
// 		title: 'CRONOGRAMA',
// 		bodyBackgroundColor: 'var(--bg-four-color-white)',
// 		footerHeightClass: 'modal__footer--responsive',
// 	};
// 	openAnotherModal(<CreditSchedule />, <DocumentExportOptions />, modalProperties);
// };
