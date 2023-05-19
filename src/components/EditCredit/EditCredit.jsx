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

export const EditCredit = () => {
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
                        <InputNumber col={4} label='N. Operación' name='n_operacion' />
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
                        <InputNumber col={6} label='Solicitao' name='pres_solicitado' money />
                        <InputNumber col={6} label='Aprobado' name='pres_aprobado' money />
                        <InputDate col={6} label='Fecha de emision' name='pres_fecha-emision' />
                        <InputDate col={6} label='Fecha desembolso' name='pres_fecha-desembolso' />
                    </InputsRow>
                    <InputsRow margin='1.6'>
                        <InputNumber col={6} label='Plazo' name='pres_plazo' />
                        <InputSelect col={6} label='Tipo plazo' name='pres_tipo-plazo' />
                        <InputSelect col={6} label='Tipo interes' name='pres_interes' />
                        <InputNumber col={6} label='Tasa%' name='pres_tasa' />

                    </InputsRow>
                    <InputsRow margin='1.6'>
                        <InputNumber col={6} label='Ventas diarias' name='pres_ventas-diarias' money />
                        <InputNumber col={6} label='Días buenos' name='pres_dias-buenos' money />
                        <InputNumber col={6} label='Días malos' name='pres_dias-malos' money />
                        <InputNumber col={6} label='Inventario' name='pres_inventario' money />
                    </InputsRow>

                    <InputsRow>
                        <InputChekbox col={8} label='Recibo de luz' name='recibo-luz' />
                        <InputChekbox col={8} label='Mayor de 21 años' name='mayor-21' />
                        <InputChekbox col={8} label='DNI vigente' name='dni-vigente' />
                    </InputsRow>
                    <InputsRow>
                        <InputChekbox col={8} label='Documentos de propiedad del negocio' name='doc-negocio' />
                        <InputChekbox col={8} label='Documentos de propiedad de vivienda' name='doc-vivienda' />
                        <InputChekbox col={8} label='Comprobantes negocio' name='compr-negocio' />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='4'>
                    <h2 className='form-tab__body-title'>Referencia 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={5} label='DNI' name='ref1_dni' />
                        <FragmentContainer col={3}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={8} label='Nombres' name='ref1_nombres' />
                        <InputText col={8} label='Apellidos' name='ref1_apellidos' />
                    </InputsRow>
                    <InputsRow margin='1.6'>
                        <InputText col={8} label='Domicilio' name='ref1_domicilio' />
                        <InputText col={4} label='Parentesco' name='ref1_parentesco' />
                        <InputText col={4} label='Celular 1' name='ref1_celular1' />
                        <InputText col={4} label='Celular 2' name='ref1_celular2' />
                        <InputSelect col={4} label='Estado civil' name='ref1_estado-civil' />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Referencia 2</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={5} label='DNI' name='ref2_dni' />
                        <FragmentContainer col={3}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={8} label='Nombres' name='ref2_nombres' />
                        <InputText col={8} label='Apellidos' name='ref2_apellidos' />
                    </InputsRow>
                    <InputsRow margin='1.6'>
                        <InputText col={8} label='Domicilio' name='ref2_domicilio' />
                        <InputText col={4} label='Parentesco' name='ref2_parentesco' />
                        <InputText col={4} label='Celular 1' name='ref2_celular1' />
                        <InputText col={4} label='Celular 2' name='ref2_celular2' />
                        <InputSelect col={4} label='Estado civil' name='ref2_estado-civil' />
                    </InputsRow>

                </div>
                <div className='form-tab__body-inputs' id='5'>
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={5} label='DNI' name='aval1_dni' />
                        <FragmentContainer col={3}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={8} label='Nombres' name='aval1_nombres' />
                        <InputText col={8} label='Apellidos' name='aval1_apellidos' />
                    </InputsRow>
                    <InputsRow margin='1.6'>
                        <InputText col={8} label='Domicilio' name='aval1_domicilio' />
                        <InputText col={6} label='Correo' name='aval1_correo' />
                        <InputText col={5} label='Celular 1' name='aval1_celular1' />
                        <InputText col={5} label='Celular 2' name='aval1_celular2' />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6'>
                        <InputText col={5} label='DNI' name='aval2_dni' />
                        <FragmentContainer col={3}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText col={8} label='Nombres' name='aval2_nombres' />
                        <InputText col={8} label='Apellidos' name='aval2_apellidos' />
                    </InputsRow>
                    <InputsRow margin='1.6'>
                        <InputText col={8} label='Domicilio' name='aval2_domicilio' />
                        <InputText col={6} label='Correo' name='aval2_correo' />
                        <InputText col={5} label='Celular 1' name='aval2_celular1' />
                        <InputText col={5} label='Celular 2' name='aval2_celular2' />
                    </InputsRow>
                </div>
            </div>
        </div>
    )
}
