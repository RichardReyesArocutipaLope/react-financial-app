import { useState } from 'react'
import { Button } from '../Button/Button'
import './Modal.css'

export const Modal = ({ isOpenModal, handleModal, modalBodyContent, modalFooterContent, modalProperties }) => {

    const { width, heightBody, staticBackdrop, scroll, verticallyCentered, title, bodyBackgroundColor } = modalProperties;

    return (
        <div className={`modal-container ${verticallyCentered ? 'center' : ''} ${isOpenModal ? 'active' : 'inactive'}`}>
            <div className={`modal ${width} ${heightBody === '100%' ? 'height100' : ''}`}>
                <div className='modal__header'>
                    <h1>{title}</h1>
                    <span onClick={handleModal} className='modal__header-closeModal'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className='modal__body-container' style={{ height: heightBody }}>
                    <div className='shadow'></div>
                    <div className={`modal__body ${scroll ? 'modal-scroll' : ''}`} style={{ height: heightBody, backgroundColor:bodyBackgroundColor }}>
                        {isOpenModal && modalBodyContent}
                    </div>
                    <div className='shadow'></div>
                </div>

                <div className='modal__footer'>
                    {isOpenModal && modalFooterContent}
                </div>
            </div>
        </div>
    )
}


