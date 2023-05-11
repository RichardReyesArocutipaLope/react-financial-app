import { useState } from 'react'
import { Button } from '../Button/Button'
import './Modal.css'
import { InputSelect } from '../InputSelect/InputSelect'
import { InputsRow } from '../InputsRow/InputsRow'
import { InputNumber } from '../InputNumber/InputNumber'
import { InputText } from '../InputText/InputText'
import { FragmentContainer } from '../FragmentContainer/FragmentContainer'

export const Modal = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    return (
        <div className={`modal-container aver ${isOpenModal ? 'active' : ''}`}>
            <div className='modal modal-l'>
                <div className='modal__header'>
                    <p>CREAR CRÉDITO</p>
                    <span onClick={handleModal} className='icon-closeModal-container'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className='modal__body-container'>
                    <div className='shadow'></div>
                    <div className='modal__body modal-scroll'>
                        <div className='tabs'>
                            <div className='luz'></div>
                            <h2>Datos de operación</h2>
                            <h2>Datos de cliente</h2>
                            <h2>Datos de negocio</h2>
                            <h2>Datos de prestamo</h2>
                            <h2>Ref. Personales</h2>
                            <h2>Datos de aval</h2>
                        </div>
                        <InputsRow>
                            <InputNumber col={4} label='N. Operación' name='estado' />
                            <InputNumber col={4} label='N. Crédito' name='estado' />
                            <InputSelect col={8} label='Analista' name='analista' />
                            <InputSelect col={8} label='Cobrador' name='cobrador' />
                        </InputsRow>
                        <hr />
                        <InputsRow>
                            <InputText col={5} label='DNI' name='estado' />
                            <FragmentContainer col={3}>
                                <Button width='8.7rem' className='primary' content='Buscar' />
                            </FragmentContainer>
                            <InputText col={8} label='Nombres' name='estado' />
                            <InputText col={8} label='Apellidos' name='estado' />
                        </InputsRow>
                        <InputsRow>
                            <InputText col={8} label='Domicilio' name='estado' />
                            <InputText col={8} label='Referencia domicilio' name='estado' />
                            <InputSelect col={8} label='Vivienda' name='cobrador' />
                        </InputsRow>
                        <InputsRow>
                            <InputSelect col={8} label='Estado civil' name='cobrador' />
                            <InputText col={8} label='Celular' name='estado' />
                            <InputText col={8} label='Correo' name='estado' />
                        </InputsRow>
                        <hr />

                        <InputsRow>
                            <InputText col={12} label='Actividad negocio' name='estado' />
                            <InputText col={12} label='Direccion Negocio' name='estado' />
                        </InputsRow>
                        <InputsRow>
                            <InputText col={12} label='Referencia Negocio' name='cobrador' />
                        </InputsRow>

                        <hr />
                        <InputsRow>
                            <InputNumber col={4} label='Solicitao' name='estado' money />
                            <InputNumber col={4} label='Aprobado' name='estado' money />
                            <InputNumber col={4} label='Fecha de emision' name='estado' money />
                            <InputNumber col={4} label='Fecha desembolso' name='estado' money />
                            <InputNumber col={4} label='Plazo' name='estado' />
                            <InputSelect col={4} label='Tipo plazo' name='cobrador' />
                        </InputsRow>
                        <InputsRow>
                            <InputSelect col={4} label='Tipo interes' name='cobrador' />
                            <InputNumber col={4} label='Tasa%' name='estado' />
                            <InputNumber col={4} label='Ventas diarias' name='estado' money />
                            <InputNumber col={4} label='Días buenos' name='estado' money />
                            <InputNumber col={4} label='Días malos' name='estado' money />
                            <InputNumber col={4} label='Inventario' name='estado' money />
                        </InputsRow>
                        <hr />
                        <InputsRow>
                            <InputText col={9} label='Nombres' name='cobrador' />
                            <InputText col={9} label='Celular' name='cobrador' />
                            <InputText col={6} label='Parentesco' name='cobrador' />
                        </InputsRow>
                        <InputsRow>
                        <InputText col={9} label='Nombres' name='cobrador' />
                            <InputText col={9} label='Celular' name='cobrador' />
                            <InputText col={6} label='Parentesco' name='cobrador' />
                        </InputsRow>
                        <hr />
                        <InputsRow>
                            <InputText col={5} label='DNI' name='estado' />
                            <FragmentContainer col={3}>
                                <Button width='8.7rem' className='primary' content='Buscar' />
                            </FragmentContainer>
                            <InputText col={8} label='Nombres' name='estado' />
                            <InputText col={8} label='Apellidos' name='estado' />
                        </InputsRow>
                        <InputsRow>
                            <InputText col={8} label='Domicilio' name='cobrador' />
                            <InputText col={8} label='Celular' name='cobrador' />
                        </InputsRow>
                        <InputsRow>
                            <InputText col={5} label='DNI' name='estado' />
                            <FragmentContainer col={3}>
                                <Button width='8.7rem' className='primary' content='Buscar' />
                            </FragmentContainer>
                            <InputText col={8} label='Nombres' name='estado' />
                            <InputText col={8} label='Apellidos' name='estado' />
                        </InputsRow>
                        <InputsRow>
                            <InputText col={8} label='Domicilio' name='cobrador' />
                            <InputText col={8} label='Celular' name='cobrador' />
                        </InputsRow>
                    </div>
                    <div className='shadow'></div>
                </div>

                <div className='modal__footer'>
                    <Button width='10rem' className='dark' content='Limpiar' />
                    <Button width='10rem' className='success' content='Guardar' />
                    <Button width='10rem' className='danger' content='Cancelar' />
                    <Button width='10rem' className='gris' content='Cronograma' />
                    <Button width='10rem' className='info' content='Visualizar' />
                </div>
            </div>
        </div>
    )
}
