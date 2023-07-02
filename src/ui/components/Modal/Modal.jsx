import React, { useEffect, useState } from 'react';
import './Modal.css'

export const Modal = ({ isOpenModal, setIsOpenModal, handleModal, modalBodyContent, modalFooterContent, modalProperties, anotherModal }) => {

    const { width, heightBody, bodyHeightClass, staticBackdrop, scroll, verticallyCentered, title, bodyBackgroundColor, footerHeightClass } = modalProperties;

    const handleClickOutside = (event) => {
        if (event.target.closest('.modal') === null) setIsOpenModal(false);
    };

    const [anotherOpenModal, setAnotherOpenModal] = useState('not-use')

    const openAnotherModal = (anotherBodyComponent = <></>, anotherFooterComponet = <></>, anotherModalProperties = {}) => {
        setAnotherOpenModal(false)
        setTimeout(() => {
            anotherModal(anotherBodyComponent, anotherFooterComponet, anotherModalProperties,)
            setAnotherOpenModal(true);
        }, 300);

        setTimeout(() => {
            setAnotherOpenModal('not-use');
        }, 610);
    }

    return (
        <div className={`modal-container ${verticallyCentered ? 'center' : ''} ${isOpenModal ? 'active' : 'inactive'} ${isOpenModal && (typeof anotherOpenModal === 'boolean') && (anotherOpenModal ? 'another-modal-active' : 'another-modal-inactive')}`}
            onClick={handleClickOutside}>
            <div
                className={`modal ${width} ${heightBody === '100%' ? 'height100' : ''} ${bodyHeightClass}`}>
                <div className='modal__header'>
                    <h1>{title}</h1>
                    <span onClick={handleModal} className='modal__header-closeModal'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className={`modal__body-container ${bodyHeightClass}`} style={{ height: heightBody }}>
                    <div className='shadow'></div>
                    <div className={`modal__body ${scroll ? 'modal-scroll' : ''}  ${bodyHeightClass}`} style={{ height: heightBody, backgroundColor: bodyBackgroundColor }}>
                        {isOpenModal && modalBodyContent}
                    </div>
                    <div className='shadow'></div>
                </div>

                <div className={`modal__footer ${footerHeightClass}`}>
                    {isOpenModal && React.cloneElement(modalFooterContent, { setIsOpenModal, openAnotherModal })}
                </div>
            </div>
        </div>
    )
}

