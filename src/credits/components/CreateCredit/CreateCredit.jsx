import { useDispatch, useSelector } from 'react-redux';
import { useResponsiveForm } from '../../../hooks';
import {
    Button, FlexContainer, FragmentContainer, InputChekbox, InputDate, InputFileDocument,
    InputFileImage, InputNumber, InputSelect, InputText, InputsRow
} from '../../../ui/components';
import './CreateCredit.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { setSubmitCreditCreateForm } from '../../../store/credits/creditsOptionsSlice';

export const CreateCredit = () => {

    const initialResponsive = [
        { name: 'DNI', xxs: 24, xs: 24, s: 16, m: 7, l: 7, xl: 5, xxl: 5, col: 6 },
        { name: 'buttonSearchDNI', xxs: 24, xs: 24, s: 8, m: 5, l: 5, xl: 3, xxl: 3, col: 6 },

        { name: 'operation_data1', xxs: 24, xs: 24, s: 12, m: 6, l: 6, xl: 4, xxl: 4, col: 6 },
        { name: 'operation_data2', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 8, xxl: 8, col: 6 },
        { name: 'client_data1', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 8, xxl: 8, col: 6 },
        { name: 'client_data2', xxs: 24, xs: 24, s: 24, m: 24, l: 24, xl: 16, xxl: 16, col: 6 },

        { name: 'busines_data', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 12, xxl: 12, col: 6 },

        { name: 'loan_data1', xxs: 24, xs: 24, s: 12, m: 8, l: 8, xl: 6, xxl: 6, col: 6 },
        { name: 'loan_data2', xxs: 24, xs: 24, s: 12, m: 12, l: 8, xl: 8, xxl: 8, col: 6 },

        { name: 'ref_data1', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 8, xxl: 8, col: 6 },
        { name: 'ref_data2', xxs: 24, xs: 24, s: 12, m: 6, l: 6, xl: 4, xxl: 4, col: 6 },

        { name: 'aval_data', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 8, xxl: 8, col: 6 },
    ]
    const { rwd, centinela } = useResponsiveForm(initialResponsive);

    const { register, handleSubmit, reset } = useForm();
    const { submitCreditCreateForm } = useSelector(state => state.creditsOptions);
    const dispatch = useDispatch();

    useEffect(() => {
        if (submitCreditCreateForm) {
            handleSubmit((data) => { console.log(data) })()

            dispatch(setSubmitCreditCreateForm(false))
        }
    }, [submitCreditCreateForm])


    return (
        <div className='form-tab'>
            <div className='form-tab__header'>
                <a href='#1'
                    className='form-tab__header-item active'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item').
                            forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i className="fa-solid fa-user"></i> : "Datos de cliente"}
                </a>
                <a href='#2'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i className="fa-solid fa-briefcase"></i> : "Datos de negocio"}
                </a>
                <a href='#3'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i className="fa-solid fa-landmark"></i> : "Datos de prestamo"}

                </a>
                <a href='#4'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i className="fa-solid fa-users"></i> : "Ref. Personales"}

                </a>
                <a href='#5'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i className="fa-solid fa-user-lock"></i> : "Datos de aval"}
                </a>
            </div>
            <div className='form-tab__body' >
                <div className='form-tab__body-inputs' id='1'>
                    <InputsRow margin='1.6'>
                        <InputNumber col={rwd.operation_data1} label='N. Operación'
                            register={{ ...register('n_operacion') }} id='n_operacion' />
                        <InputNumber col={rwd.operation_data1} label='N. Crédito'
                            register={{ ...register('n_credito') }} id='n_credito' />
                        <InputSelect col={rwd.operation_data2} label='Analista' id='analista'
                            register={{ ...register('analista', { required: 'El analista es requerido' }) }} />
                        <InputSelect col={rwd.operation_data2} label='Cobrador' id='cobrador'
                            register={{ ...register('cobrador', { required: 'El cobrador es requerido' }) }} />
                    </InputsRow>
                    <hr />
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI' id='dni_cliente'
                            register={{ ...register('dni_cliente', { required: 'El DNI es requerido' }) }} />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.client_data1} label='Nombres' id='cli_nombre'
                            register={{ ...register('cli_nombre', { required: 'El nombre es requerido' }) }} />

                        <InputText col={rwd.client_data1} label='Apellidos' id='cli_apellidos'
                            register={{ ...register('cli_apellidos', { required: 'El apellido es requerido' }) }} />


                        <InputText col={rwd.client_data1} label='Domicilio' id='cli_domicilio'
                            register={{ ...register('cli_domicilio', { required: 'El domicilio es requerido' }) }} />

                        <InputText col={rwd.client_data1} label='Referencia domicilio' id='cli_ref_domicilio'
                            register={{ ...register('cli_ref_domicilio') }} />

                        <InputSelect col={rwd.client_data1} label='Vivienda' id='cli_vivienda'
                            register={{ ...register('cli_vivienda', { required: 'El tipo de vivienda es requerido' }) }} />


                        <InputSelect col={rwd.client_data1} label='Estado civil' id='cli_estado_civil'
                            register={{ ...register('cli_estado_civil', { required: 'El estado civil es requerido' }) }} />

                        <InputText col={rwd.client_data1} label='Celular 1' id='cli_celular1'
                            register={{ ...register('cli_celular1', { required: 'El celular 1 es requerido' }) }} />

                        <InputText col={rwd.client_data1} label='Celular 2' id='cli_celular2'
                            register={{ ...register('cli_celular2') }} />


                        <InputText col={rwd.client_data1} label='Correo' id='cli_correo'
                            register={{ ...register('cli_correo', { required: 'El correo es requerido' }) }} />

                        <InputText col={rwd.client_data2} label='Observacion' id='clie_obs'
                            register={{ ...register('clie_obs') }} />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='2'>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.busines_data} label='Actividad negocio' id='neg_actividad'
                            register={{ ...register('neg_actividad', { required: 'La actividad del negocio es requerida' }) }} />

                        <InputText col={rwd.busines_data} label='Direccion Negocio' id='neg_direccion'
                            register={{ ...register('neg_direccion', { required: 'La dirección del negocio es requerida' }) }} />

                        <InputText col={rwd.busines_data} label='Referencia Negocio' id='neg_referencia'
                            register={{ ...register('neg_referencia') }} />
                    </InputsRow>

                    <h2 className='form-tab__body-title'>Subir imagenes</h2>
                    <FlexContainer margin='1'>
                        <InputFileImage name='image1' />
                        <InputFileImage name='image2' />
                        <InputFileImage name='image3' />
                        <InputFileImage name='image4' />
                    </FlexContainer>
                    <h2 className='form-tab__body-title'>Subir documentos</h2>
                    <FlexContainer margin='1'>
                        <InputFileDocument name='doc1' />
                        <InputFileDocument name='doc2' />
                    </FlexContainer>
                </div>
                <div className='form-tab__body-inputs' id='3'>
                    <InputsRow margin='1.6'>
                        <InputNumber col={rwd.loan_data1} label='Solicitao' id='pres_solicitado' money
                            register={{ ...register('pres_solicitado', { required: 'El préstamo solicitado es requerido' }) }} />

                        <InputNumber col={rwd.loan_data1} label='Aprobado'  id='pres_aprobado' money
                            register={{ ...register('pres_aprobado') }} />

                        <InputDate col={rwd.loan_data1} label='Fecha de emision' id='pres_fecha_emision'
                            register={{ ...register('pres_fecha_emision', { required: 'La fecha de emisión es requerida' }) }} />

                        <InputDate col={rwd.loan_data1} label='Fecha desembolso' id='pres_fecha_desembolso'
                            register={{ ...register('pres_fecha_desembolso') }} />


                        <InputNumber col={rwd.loan_data1} label='Plazo' id='pres_plazo'
                            register={{ ...register('pres_plazo', { required: 'El plazo del crédito es requerido' }) }} />

                        <InputSelect col={rwd.loan_data1} label='Tipo plazo' id='pres_tipo_plazo'
                            register={{ ...register('pres_tipo_plazo', { required: 'El tipo de plazo es requerido' }) }} />

                        <InputSelect col={rwd.loan_data1} label='Tipo interes' id='pres_interes'
                            register={{ ...register('pres_interes', { required: 'El tipo de interes es requerido' }) }} />

                        <InputNumber col={rwd.loan_data1} label='Tasa%' id='pres_tasa'
                            register={{ ...register('pres_tasa', { required: 'La tasa es requerida' }) }} />


                        <InputNumber col={rwd.loan_data1} label='Ventas diarias' id='pres_ventas_diarias' money
                            register={{ ...register('pres_ventas_diarias', { required: 'Ventas diarias es requerido' }) }} />

                        <InputNumber col={rwd.loan_data1} label='Días buenos' id='pres_dias_buenos' money
                            register={{ ...register('pres_dias_buenos', { required: 'Ventas en días buenos es requerido' }) }} />

                        <InputNumber col={rwd.loan_data1} label='Días malos' id='pres_dias_malos' money
                            register={{ ...register('pres_dias_malos', { required: 'Ventas en días malos es requerido' }) }} />

                        <InputNumber col={rwd.loan_data1} label='Inventario' id='pres_inventario' money
                            register={{ ...register('pres_inventario', { required: 'El valor del inventario es requerido' }) }} />
                    </InputsRow>

                    <InputsRow margin='1.6'>
                        <InputChekbox col={rwd.loan_data2} label='Recibo de luz' id='recibo_luz'
                            register={{ ...register('recibo_luz') }} />

                        <InputChekbox col={rwd.loan_data2} label='Mayor de 21 años' id='mayor_21'
                            register={{ ...register('mayor_21') }} />

                        <InputChekbox col={rwd.loan_data2} label='DNI vigente' id='dni_vigente'
                            register={{ ...register('dni_vigente') }} />


                        <InputChekbox col={rwd.loan_data2} label='Documentos de propiedad del negocio' id='doc_negocio'
                            register={{ ...register('doc_negocio') }} />

                        <InputChekbox col={rwd.loan_data2} label='Documentos de propiedad de vivienda' id='doc_vivienda'
                            register={{ ...register('doc_vivienda') }} />

                        <InputChekbox col={rwd.loan_data2} label='Comprobantes negocio' id='compr_negocio'
                            register={{ ...register('compr_negocio') }} />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='4'>
                    <h2 className='form-tab__body-title'>Referencia 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI'
                            register={{ ...register('ref1_dni') }} id='ref1_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.ref_data1} label='Nombres'
                            register={{ ...register('ref1_nombres') }} id='ref1_nombres' />
                        <InputText col={rwd.ref_data1} label='Apellidos'
                            register={{ ...register('ref1_apellidos') }} id='ref1_apellidos' />


                        <InputText col={rwd.ref_data1} label='Domicilio'
                            register={{ ...register('ref1_domicilio') }} id='ref1_domicilio' />
                        <InputText col={rwd.ref_data2} label='Parentesco'
                            register={{ ...register('ref1_parentesco') }} id='ref1_parentesco' />
                        <InputText col={rwd.ref_data2} label='Celular 1'
                            register={{ ...register('ref1_celular1') }} id='ref1_celular1' />
                        <InputText col={rwd.ref_data2} label='Celular 2'
                            register={{ ...register('ref1_celular2') }} id='ref1_celular2' />
                        <InputSelect col={rwd.ref_data2} label='Estado civil'
                            register={{ ...register('ref1_estado_civil') }} id='ref1_estado_civil' />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Referencia 2</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI'
                            register={{ ...register('ref2_dni') }} id='ref2_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.ref_data1} label='Nombres'
                            register={{ ...register('ref2_nombres') }} id='ref2_nombres' />
                        <InputText col={rwd.ref_data1} label='Apellidos'
                            register={{ ...register('ref2_apellidos') }} id='ref2_apellidos' />


                        <InputText col={rwd.ref_data1} label='Domicilio'
                            register={{ ...register('ref2_domicilio') }} id='ref2_domicilio' />
                        <InputText col={rwd.ref_data2} label='Parentesco'
                            register={{ ...register('ref2_parentesco') }} id='ref2_parentesco' />
                        <InputText col={rwd.ref_data2} label='Celular 1'
                            register={{ ...register('ref2_celular1') }} id='ref2_celular1' />
                        <InputText col={rwd.ref_data2} label='Celular 2'
                            register={{ ...register('ref2_celular2') }} id='ref2_celular2' />
                        <InputSelect col={rwd.ref_data2} label='Estado civil'
                            register={{ ...register('ref2_estado_civil') }} id='ref2_estado_civil' />
                    </InputsRow>

                </div>
                <div className='form-tab__body-inputs' id='5'>
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI'
                            register={{ ...register('aval1_dni') }} id='aval1_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.aval_data} label='Nombres'
                            register={{ ...register('aval1_nombres') }} id='aval1_nombres' />
                        <InputText col={rwd.aval_data} label='Apellidos'
                            register={{ ...register('aval1_apellidos') }} id='aval1_apellidos' />

                        <InputText col={rwd.aval_data} label='Domicilio'
                            register={{ ...register('aval1_domicilio') }} id='aval1_domicilio' />
                        <InputText col={rwd.aval_data} label='Correo'
                            register={{ ...register('aval1_correo') }} id='aval1_correo' />
                        <InputText col={rwd.aval_data} label='Celular 1'
                            register={{ ...register('aval1_celular1') }} id='aval1_celular1' />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI'
                            register={{ ...register('aval2_dni') }} id='aval2_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.aval_data} label='Nombres'
                            register={{ ...register('aval2_nombres') }} id='aval2_nombres' />
                        <InputText col={rwd.aval_data} label='Apellidos'
                            register={{ ...register('aval2_apellidos') }} id='aval2_apellidos' />

                        <InputText col={rwd.aval_data} label='Domicilio'
                            register={{ ...register('aval2_domicilio') }} id='aval2_domicilio' />
                        <InputText col={rwd.aval_data} label='Correo'
                            register={{ ...register('aval2_correo') }} id='aval2_correo' />
                        <InputText col={rwd.aval_data} label='Celular 1'
                            register={{ ...register('aval2_celular1') }} id='aval2_celular1' />
                    </InputsRow>
                </div>
            </div>
        </div>
    )
}
