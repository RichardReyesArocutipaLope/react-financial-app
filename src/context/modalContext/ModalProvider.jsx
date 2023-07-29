import { useState } from 'react';
import { Modal } from '../../ui/components';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [modalBodyContent, setModalBodyContent] = useState(<></>);
	const [modalFooterContent, setModalFooterContent] = useState(<></>);
	const [modalProperties, setModalProperties] = useState({
		width: 'modal-l',
		bodyHeight: '40rem',
		bodyHeightClass: '',
		staticBackdrop: false,
		hasScroll: false,
		verticallyCentered: false,
		title: 'MODAL',
		bodyBackgroundColor: 'var(--bg-two-color-white)',
		footerHeightClass: '',
	});

	const handleModal = (
		typeOfOperation = '',
		bodyComponent = <></>,
		footerComponet = <></>,
		modalProperties = {},
	) => {
		if (typeOfOperation === 'setData') {
			setModalBodyContent(bodyComponent);
			setModalFooterContent(footerComponet);
			modalProperties && setModalProperties(modalProperties);
			setIsOpenModal(!isOpenModal);
			return;
		}
		setIsOpenModal(!isOpenModal);
	};

	const anotherModal = (
		anotherBodyComponent = <></>,
		anotherFooterComponet = <></>,
		anotherModalProperties = {},
	) => {
		setModalBodyContent(anotherBodyComponent);
		setModalFooterContent(anotherFooterComponet);
		modalProperties && setModalProperties(anotherModalProperties);
	};

	return (
		<>
			<ModalContext.Provider value={{ handleModal, setIsOpenModal }}>
				{children}
			</ModalContext.Provider>

			<Modal
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				handleModal={handleModal}
				modalBodyContent={modalBodyContent}
				modalFooterContent={modalFooterContent}
				modalProperties={modalProperties}
				anotherModal={anotherModal}
			/>
		</>
	);
};
