import { useState } from 'react'
import { Button } from '../Button/Button'
import './Modal.css'

export const Modal = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleModal=()=>{
        setIsOpenModal(!isOpenModal);
    }

    return (
        <div className={`modal-container aver ${isOpenModal?'active':''}`}>
            <div className='modal modal-m'>
                <div className='modal__header'>
                    <p>CREAR CRÉDITO</p>
                    <span onClick={handleModal} className='icon-closeModal-container'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className='modal__body-container'>
                    <div className='shadow'></div>
                    <div className='modal__body modal-scroll'>
                    </div>
                    <div className='shadow'></div>
                </div>

                <div className='modal__footer'>
                    <Button width='9.2rem' className='dark' content='Limpiar' />
                    <Button width='9.2rem' className='success' content='Guardar' />
                    <Button width='9.2rem' className='danger' content='Cancelar' />
                </div>
            </div>
        </div>
    )
}
