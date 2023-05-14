import { useState } from 'react'
import { Button } from '../Button/Button'
import './Modal.css'
import { InputSelect } from '../InputSelect/InputSelect'
import { InputsRow } from '../InputsRow/InputsRow'
import { InputNumber } from '../InputNumber/InputNumber'
import { InputText } from '../InputText/InputText'
import { FragmentContainer } from '../FragmentContainer/FragmentContainer'
import { NavLink } from 'react-router-dom'

export const Modal = ({ isOpenModal, handleModal }) => {

    return (
        <div className={`modal-container ${isOpenModal ? 'active' : 'inactive'}`}>
            <div className='modal modal-l'>
                <div className='modal__header'>
                    <h1>CREAR CRÉDITO</h1>
                    <span onClick={handleModal} className='modal__header-closeModal'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className='modal__body-container'>
                    <div className='shadow hidden'></div>
                    <div className='modal__body modal-scroll'>

                        {/* onClick={(e) => { e.target.classList.toggle('active') }} */}
                        <div className='form-tab'>
                            <div className='form-tab__header'>
                                <a href='#1'
                                    className='form-tab__header-item active'
                                    onClick={(e) => {
                                        document.querySelectorAll('.form-tab__header-item').
                                        forEach((item) => { item.classList.remove('active') });
                                        e.target.classList.add('active');
                                    }}>
                                    Datos de cliente
                                </a>
                                <a href='#2'
                                    className='form-tab__header-item'
                                    onClick={(e) => {
                                        document.querySelectorAll('.form-tab__header-item')
                                            .forEach((item) => { item.classList.remove('active') });
                                        e.target.classList.add('active');
                                    }}>
                                    Datos de negocio
                                </a>
                                <a href='#3'
                                    className='form-tab__header-item'
                                    onClick={(e) => {
                                        document.querySelectorAll('.form-tab__header-item')
                                            .forEach((item) => { item.classList.remove('active') });
                                        e.target.classList.add('active');
                                    }}>
                                    Datos de prestamo
                                </a>
                                <a href='#4'
                                    className='form-tab__header-item'
                                    onClick={(e) => {
                                        document.querySelectorAll('.form-tab__header-item')
                                            .forEach((item) => { item.classList.remove('active') });
                                        e.target.classList.add('active');
                                    }}>
                                    Ref. Personales
                                </a>
                                <a href='#5'
                                    className='form-tab__header-item'
                                    onClick={(e) => {
                                        document.querySelectorAll('.form-tab__header-item')
                                            .forEach((item) => { item.classList.remove('active') });
                                        e.target.classList.add('active');
                                    }}>
                                    Datos de aval
                                </a>
                            </div>
                            <div className='form-tab__body'>
                                <div className='form-tab__body-inputs' id='1'>
                                    <InputsRow margin='1.6'>
                                        <InputNumber col={4} label='N. Operación' name='n_operacion'/>
                                        <InputNumber col={4} label='N. Crédito' name='n_credito' />
                                        <InputSelect col={8} label='Analista' name='analista' />
                                        <InputSelect col={8} label='Cobrador' name='cobrador' />
                                    </InputsRow>
                                    <hr />
                                    <InputsRow margin='1.6'>
                                        <InputText col={5} label='DNI' name='dni' />
                                        <FragmentContainer col={3}>
                                            <Button width='8.7rem' className='primary' content='Buscar' />
                                        </FragmentContainer>
                                        <InputText col={8} label='Nombres' name='cli_nombre' />
                                        <InputText col={8} label='Apellidos' name='cli_apellidos' />
                                    </InputsRow>
                                    <InputsRow margin='1.6'>
                                        <InputText col={8} label='Domicilio' name='cli_domicilio' />
                                        <InputText col={8} label='Referencia domicilio' name='cli_ref-domicilio' />
                                        <InputSelect col={8} label='Vivienda' name='cli_vivienda' />
                                    </InputsRow>
                                    <InputsRow margin='1.6'>
                                        <InputSelect col={8} label='Estado civil' name='cli_estado-civil' />
                                        <InputText col={8} label='Celular 1' name='cli_celular1' />
                                        <InputText col={8} label='Celular 2' name='cli_celular2' />
                                    </InputsRow>
                                    <InputsRow margin='1.6'>
                                        <InputText col={8} label='Correo' name='cli_correo' />
                                        <InputText col={16} label='Observacion' name='clie_obs' />
                                    </InputsRow>
                                </div>
                                <div className='form-tab__body-inputs' id='2'>
                                    <InputsRow margin='1.6'>
                                        <InputText col={12} label='Actividad negocio' name='neg_actividad' />
                                        <InputText col={12} label='Direccion Negocio' name='neg_direccion' />
                                    </InputsRow>
                                    <InputsRow margin='1.6'>
                                        <InputText col={12} label='Referencia Negocio' name='neg_referencia' />
                                    </InputsRow>
                                </div>
                                <div className='form-tab__body-inputs' id='3'>

                                    <InputsRow>
                                        <InputNumber col={6} label='Solicitao' name='pres_solicitado' money />
                                        <InputNumber col={6} label='Aprobado' name='pres_aprobado' money />
                                        <InputNumber col={6} label='Fecha de emision' name='pres_fecha-emision' money />
                                        <InputNumber col={6} label='Fecha desembolso' name='pres_fecha-desembolso' money />

                                    </InputsRow>
                                    <InputsRow>
                                        <InputNumber col={6} label='Plazo' name='pres_plazo' />
                                        <InputSelect col={6} label='Tipo plazo' name='pres_tipo-plazo' />
                                        <InputSelect col={6} label='Tipo interes' name='pres_interes' />
                                        <InputNumber col={6} label='Tasa%' name='pres_tasa' />

                                    </InputsRow>
                                    <InputsRow>
                                        <InputNumber col={6} label='Ventas diarias' name='pres_ventas-diarias' money />
                                        <InputNumber col={6} label='Días buenos' name='pres_dias-buenos' money />
                                        <InputNumber col={6} label='Días malos' name='pres_dias-malos' money />
                                        <InputNumber col={6} label='Inventario' name='pres_inventario' money />
                                    </InputsRow>
                                </div>
                                <div className='form-tab__body-inputs' id='4'>
                                    <h2>Referencia 1</h2>
                                    <InputsRow>
                                        <InputText col={5} label='DNI' name='ref1_dni' />
                                        <FragmentContainer col={3}>
                                            <Button width='8.7rem' className='primary' content='Buscar' />
                                        </FragmentContainer>
                                        <InputText col={8} label='Nombres' name='ref1_nombres' />
                                        <InputText col={8} label='Apellidos' name='ref1_apellidos' />
                                    </InputsRow>
                                    <InputsRow>
                                        <InputText col={8} label='Domicilio' name='ref1_domicilio' />
                                        <InputText col={4} label='Parentesco' name='ref1_parentesco' />
                                        <InputText col={4} label='Celular 1' name='ref1_celular1' />
                                        <InputText col={4} label='Celular 2' name='ref1_celular2' />
                                        <InputSelect col={4} label='Estado civil' name='ref1_estado-civil' />
                                    </InputsRow>
                                    <hr />
                                    <h2>Referencia 2</h2>
                                    <InputsRow>
                                        <InputText col={5} label='DNI' name='ref2_dni' />
                                        <FragmentContainer col={3}>
                                            <Button width='8.7rem' className='primary' content='Buscar' />
                                        </FragmentContainer>
                                        <InputText col={8} label='Nombres' name='ref2_nombres' />
                                        <InputText col={8} label='Apellidos' name='ref2_apellidos' />
                                    </InputsRow>
                                    <InputsRow>
                                        <InputText col={8} label='Domicilio' name='ref2_domicilio' />
                                        <InputText col={4} label='Parentesco' name='ref2_parentesco' />
                                        <InputText col={4} label='Celular 1' name='ref2_celular1' />
                                        <InputText col={4} label='Celular 2' name='ref2_celular2' />
                                        <InputSelect col={4} label='Estado civil' name='ref2_estado-civil' />
                                    </InputsRow>

                                </div>
                                <div className='form-tab__body-inputs' id='5'>
                                    <h2>Aval 1</h2>
                                    <InputsRow>
                                        <InputText col={5} label='DNI' name='aval1_dni' />
                                        <FragmentContainer col={3}>
                                            <Button width='8.7rem' className='primary' content='Buscar' />
                                        </FragmentContainer>
                                        <InputText col={8} label='Nombres' name='aval1_nombres' />
                                        <InputText col={8} label='Apellidos' name='aval1_apellidos' />
                                    </InputsRow>
                                    <InputsRow>
                                        <InputText col={8} label='Domicilio' name='aval1_domicilio' />
                                        <InputText col={6} label='Correo' name='aval1_correo' />
                                        <InputText col={5} label='Celular 1' name='aval1_celular1' />
                                        <InputText col={5} label='Celular 2' name='aval1_celular2' />
                                    </InputsRow>
                                    <hr />
                                    <h2>Aval 1</h2>
                                    <InputsRow>
                                        <InputText col={5} label='DNI' name='aval2_dni' />
                                        <FragmentContainer col={3}>
                                            <Button width='8.7rem' className='primary' content='Buscar' />
                                        </FragmentContainer>
                                        <InputText col={8} label='Nombres' name='aval2_nombres' />
                                        <InputText col={8} label='Apellidos' name='aval2_apellidos' />
                                    </InputsRow>
                                    <InputsRow>
                                        <InputText col={8} label='Domicilio' name='aval2_domicilio' />
                                        <InputText col={6} label='Correo' name='aval2_correo' />
                                        <InputText col={5} label='Celular 1' name='aval2_celular1' />
                                        <InputText col={5} label='Celular 2' name='aval2_celular2' />
                                    </InputsRow>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='shadow hidden'></div>
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
