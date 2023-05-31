import { useResponsiveForm } from '../../hooks/useResponsiveForm';
import { Button } from '../../shared/Button/Button';
import { FlexContainer } from '../../shared/FlexContainer/FlexContainer';
import { FragmentContainer } from '../../shared/FragmentContainer/FragmentContainer';
import { InputChekbox } from '../../shared/InputCheckbox/InputChekbox';
import { InputDate } from '../../shared/InputDate/InputDate';
import { InputFileDocument } from '../../shared/InputFileDocument/InputFileDocument';
import { InputFileImage } from '../../shared/InputFileImage/InputFileImage';
import { InputNumber } from '../../shared/InputNumber/InputNumber';
import { InputSelect } from '../../shared/InputSelect/InputSelect';
import { InputText } from '../../shared/InputText/InputText';
import { InputsRow } from '../../shared/InputsRow/InputsRow';
import './EditCredit.css';

export const EditCredit = () => {

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
                    {(centinela <= 1280) ? <i class="fa-solid fa-user"></i> : "Datos de cliente"}
                </a>
                <a href='#2'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i class="fa-solid fa-briefcase"></i> : "Datos de negocio"}
                </a>
                <a href='#3'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i class="fa-solid fa-landmark"></i> : "Datos de prestamo"}

                </a>
                <a href='#4'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i class="fa-solid fa-users"></i> : "Ref. Personales"}

                </a>
                <a href='#5'
                    className='form-tab__header-item'
                    onClick={(e) => {
                        document.querySelectorAll('.form-tab__header-item')
                            .forEach((item) => { item.classList.remove('active') });
                        e.target.classList.add('active');
                    }}>
                    {(centinela <= 1280) ? <i class="fa-solid fa-user-lock"></i> : "Datos de aval"}
                </a>
            </div>
            <div className='form-tab__body' >
                <div className='form-tab__body-inputs' id='1'>
                    <InputsRow margin='1.6'>
                        <InputNumber col={rwd.operation_data1} label='N. Operación' name='n_operacion' />
                        <InputNumber col={rwd.operation_data1} label='N. Crédito' name='n_credito' />
                        <InputSelect col={rwd.operation_data2} label='Analista' name='analista' />
                        <InputSelect col={rwd.operation_data2} label='Cobrador' name='cobrador' />
                    </InputsRow>
                    <hr />
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI' name='dni_cliente' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.client_data1} label='Nombres' name='cli_nombre' />
                        <InputText col={rwd.client_data1} label='Apellidos' name='cli_apellidos' />

                        <InputText col={rwd.client_data1} label='Domicilio' name='cli_domicilio' />
                        <InputText col={rwd.client_data1} label='Referencia domicilio' name='cli_ref_domicilio' />
                        <InputSelect col={rwd.client_data1} label='Vivienda' name='cli_vivienda' />

                        <InputSelect col={rwd.client_data1} label='Estado civil' name='cli_estado_civil' />
                        <InputText col={rwd.client_data1} label='Celular 1' name='cli_celular1' />
                        <InputText col={rwd.client_data1} label='Celular 2' name='cli_celular2' />

                        <InputText col={rwd.client_data1} label='Correo' name='cli_correo' />
                        <InputText col={rwd.client_data2} label='Observacion' name='clie_obs' />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='2'>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.busines_data} label='Actividad negocio' name='neg_actividad' />
                        <InputText col={rwd.busines_data} label='Direccion Negocio' name='neg_direccion' />
                        <InputText col={rwd.busines_data} label='Referencia Negocio' name='neg_referencia' />
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
                        <InputNumber col={rwd.loan_data1} label='Solicitao' name='pres_solicitado' money />
                        <InputNumber col={rwd.loan_data1} label='Aprobado' name='pres_aprobado' money />
                        <InputDate col={rwd.loan_data1} label='Fecha de emision' name='pres_fecha_emision' />
                        <InputDate col={rwd.loan_data1} label='Fecha desembolso' name='pres_fecha_desembolso' />

                        <InputNumber col={rwd.loan_data1} label='Plazo' name='pres_plazo' />
                        <InputSelect col={rwd.loan_data1} label='Tipo plazo' name='pres_tipo_plazo' />
                        <InputSelect col={rwd.loan_data1} label='Tipo interes' name='pres_interes' />
                        <InputNumber col={rwd.loan_data1} label='Tasa%' name='pres_tasa' />

                        <InputNumber col={rwd.loan_data1} label='Ventas diarias' name='pres_ventas_diarias' money />
                        <InputNumber col={rwd.loan_data1} label='Días buenos' name='pres_dias_buenos' money />
                        <InputNumber col={rwd.loan_data1} label='Días malos' name='pres_dias_malos' money />
                        <InputNumber col={rwd.loan_data1} label='Inventario' name='pres_inventario' money />
                    </InputsRow>

                    <InputsRow margin='1.6'>
                        <InputChekbox col={rwd.loan_data2} label='Recibo de luz' name='recibo_luz' />
                        <InputChekbox col={rwd.loan_data2} label='Mayor de 21 años' name='mayor_21' />
                        <InputChekbox col={rwd.loan_data2} label='DNI vigente' name='dni_vigente' />

                        <InputChekbox col={rwd.loan_data2} label='Documentos de propiedad del negocio' name='doc_negocio' />
                        <InputChekbox col={rwd.loan_data2} label='Documentos de propiedad de vivienda' name='doc_vivienda' />
                        <InputChekbox col={rwd.loan_data2} label='Comprobantes negocio' name='compr_negocio' />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='4'>
                    <h2 className='form-tab__body-title'>Referencia 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI' name='ref1_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.ref_data1} label='Nombres' name='ref1_nombres' />
                        <InputText col={rwd.ref_data1} label='Apellidos' name='ref1_apellidos' />


                        <InputText col={rwd.ref_data1} label='Domicilio' name='ref1_domicilio' />
                        <InputText col={rwd.ref_data2} label='Parentesco' name='ref1_parentesco' />
                        <InputText col={rwd.ref_data2} label='Celular 1' name='ref1_celular1' />
                        <InputText col={rwd.ref_data2} label='Celular 2' name='ref1_celular2' />
                        <InputSelect col={rwd.ref_data2} label='Estado civil' name='ref1_estado_civil' />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Referencia 2</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI' name='ref2_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.ref_data1} label='Nombres' name='ref2_nombres' />
                        <InputText col={rwd.ref_data1} label='Apellidos' name='ref2_apellidos' />


                        <InputText col={rwd.ref_data1} label='Domicilio' name='ref2_domicilio' />
                        <InputText col={rwd.ref_data2} label='Parentesco' name='ref2_parentesco' />
                        <InputText col={rwd.ref_data2} label='Celular 1' name='ref2_celular1' />
                        <InputText col={rwd.ref_data2} label='Celular 2' name='ref2_celular2' />
                        <InputSelect col={rwd.ref_data2} label='Estado civil' name='ref2_estado_civil' />
                    </InputsRow>

                </div>
                <div className='form-tab__body-inputs' id='5'>
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI' name='aval1_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.aval_data} label='Nombres' name='aval1_nombres' />
                        <InputText col={rwd.aval_data} label='Apellidos' name='aval1_apellidos' />

                        <InputText col={rwd.aval_data} label='Domicilio' name='aval1_domicilio' />
                        <InputText col={rwd.aval_data} label='Correo' name='aval1_correo' />
                        <InputText col={rwd.aval_data} label='Celular 1' name='aval1_celular1' />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={rwd.DNI} label='DNI' name='aval2_dni' />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={rwd.aval_data} label='Nombres' name='aval2_nombres' />
                        <InputText col={rwd.aval_data} label='Apellidos' name='aval2_apellidos' />

                        <InputText col={rwd.aval_data} label='Domicilio' name='aval2_domicilio' />
                        <InputText col={rwd.aval_data} label='Correo' name='aval2_correo' />
                        <InputText col={rwd.aval_data} label='Celular 1' name='aval2_celular1' />
                    </InputsRow>
                </div>
            </div>
        </div>
    )
}
