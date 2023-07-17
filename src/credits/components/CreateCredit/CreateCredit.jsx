import { useDispatch, useSelector } from 'react-redux';
import { useResponsiveForm } from '../../../hooks';
import {
    Button, FlexContainer, FragmentContainer, InputChekbox, InputDate, InputFileDocument,
    InputFileImage, InputNumber, InputSelect, InputText, InputsRow
} from '../../../ui/components';
import './CreateCredit.css';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { setCleanCreditCreateForm, setSubmitCreditCreateForm } from '../../../store/credits/creditsOptionsSlice';
import { startNewCredit } from '../../../store/credits/thunks';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { setActivateAlert } from '../../../store/credits/creditsSlice';

export const CreateCredit = ({setIsOpenModal}) => {

    const { analistas, cobradores } = useSelector(state => state.roles);

    const { periodType } = useSelector(state => state.periodType);
    const { financialInterestRate } = useSelector(state => state.financialInterestRate);
    const { civilStatus } = useSelector(state => state.civilStatus);
    const { housingType } = useSelector(state => state.housingType);

    const { activateAlert, message } = useSelector(state => state.credits);
    const { setIsActiveAlert, setDataAlert } = useContext(AlertContext);

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

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            n_operacion: "",
            n_credito: "",
            analista: "3",
            cobrador: "7",
            dni_cliente: "70289940",
            cli_nombre: "Richard Reyes",
            cli_apellidos: "Arocutipa Lope",
            cli_domicilio: "la perla mz 127 lt 21",
            cli_ref_domicilio: "atras del local comunal",
            cli_vivienda: "1",
            cli_estado_civil: "2",
            cli_celular1: "+51 925072688",
            cli_celular2: "+51 789645734",
            cli_correo: "richard@gmail.com",
            clie_obs: "dos semanas para acabar redes 2",
            neg_actividad: "desarrollo web",
            neg_direccion: "no existe",
            neg_referencia: "esto menos",
            neg_observacion: "toy terminando mi proyecto",
            pres_solicitado: "15000",
            pres_aprobado: "",
            pres_fecha_emision: "2023-07-09",
            pres_fecha_desembolso: "",
            pres_plazo: "16",
            pres_tipo_plazo: "1",
            pres_interes: "1",
            pres_tasa: "12.43",
            pres_ventas_diarias: "500",
            pres_dias_buenos: "2000",
            pres_dias_malos: "200",
            pres_inventario: "150000",
            recibo_luz: true,
            mayor_21: true,
            dni_vigente: true,
            doc_negocio: false,
            doc_vivienda: false,
            compr_negocio: false,
            ref1_dni: "11928374",
            ref1_nombres: "lady",
            ref1_apellidos: "arocutipa",
            ref1_domicilio: "la perla mz 121 lt 1",
            ref1_parentesco: "hermana",
            ref1_celular1: "+51687233645",
            ref1_correo: "lady@gmail.com",
            ref2_dni: "92837465",
            ref2_nombres: "marleny",
            ref2_apellidos: "churata",
            ref2_domicilio: "la perla",
            ref2_parentesco: "mamá",
            ref2_celular1: "+51345234345",
            ref2_correo: "lady@gmail.com",
            aval1_dni: "92758310",
            aval1_nombres: "rosendo",
            aval1_apellidos: "zapana",
            aval1_domicilio: "chile",
            aval1_correo: "lady@gmail.com",
            aval1_celular1: "+51687233645",
            aval2_dni: "61936295",
            aval2_nombres: "iama",
            aval2_apellidos: "cama",
            aval2_domicilio: "ciudad nueva",
            aval2_correo: "lady@gmail.com",
            aval2_celular1: "+51687233645"
        }
    });
    const { submitCreditCreateForm, cleanCreditCreateForm } = useSelector(state => state.creditsOptions);
    const dispatch = useDispatch();
    console.log(errors)
    useEffect(() => {
        if (submitCreditCreateForm) {
            handleSubmit((data) => {
                console.log(data)
                dispatch(startNewCredit(data))
            })()
            dispatch(setSubmitCreditCreateForm(false))
        }
    }, [submitCreditCreateForm])

    useEffect(() => {
        if (cleanCreditCreateForm) {
            reset()
            dispatch(setCleanCreditCreateForm(false))
        }
    }, [cleanCreditCreateForm])

    useEffect(() => {
        if (activateAlert.isActive) {
            setIsActiveAlert(true)
            setDataAlert({
                type: activateAlert.type,
                errorCode: message.statusCode,
                message: message.message
            })
            setTimeout(() => {
                dispatch(setActivateAlert({isActive:false, type:''}))
                setIsActiveAlert(false)
            }, 3000);
            if (activateAlert.type=='success') setIsOpenModal(false)
        }

    }, [activateAlert.isActive])


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
            <form className='form-tab__body' >
                <div className='form-tab__body-inputs' id='1'>
                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputNumber
                            col={rwd.operation_data1}
                            label='N. Operación'

                            register={{ ...register('n_operacion') }}
                            id='n_operacion'
                        />
                        <InputNumber
                            col={rwd.operation_data1}
                            label='N. Crédito'
                            register={{ ...register('n_credito') }} id='n_credito'
                        />
                        <InputSelect
                            col={rwd.operation_data2}
                            label='Analista'
                            id='analista'
                            error={errors?.analista?.message}
                            required={true}
                            register={{ ...register('analista', { required: 'El analista es requerido' }) }}
                        >
                            {analistas?.map(({ id, fullname }) => (<option key={id} value={id}>{fullname}</option>))}
                        </InputSelect>
                        <InputSelect
                            col={rwd.operation_data2}
                            label='Cobrador'
                            id='cobrador'
                            error={errors?.cobrador?.message}
                            required={true}
                            register={{ ...register('cobrador', { required: 'El cobrador es requerido' }) }}
                        >
                            {cobradores?.map(({ id, fullname }) => <option key={id} value={id}>{fullname}</option>)}
                        </InputSelect>
                    </InputsRow>

                    <hr />

                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputText
                            col={rwd.DNI}
                            label='DNI'
                            id='dni_cliente'
                            error={errors?.dni_cliente?.message}
                            required={true}
                            register={{
                                ...register('dni_cliente',
                                    {
                                        required: 'El DNI es requerido',
                                        maxLength: { value: 8, message: "El DNI debe tener 8 números" },
                                        minLength: { value: 8, message: "El DNI debe tener 8 números" },
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: "El DNI solo puede contener números!"
                                        },
                                    })
                            }} />

                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>

                        <InputText
                            col={rwd.client_data1}
                            label='Nombres'
                            id='cli_nombre'
                            error={errors?.cli_nombre?.message}
                            required={true}
                            register={{
                                ...register('cli_nombre', {
                                    required: 'El nombre es requerido',
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El nombre solo puede contener letras y espacios"
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.client_data1}
                            label='Apellidos'
                            id='cli_apellidos'
                            error={errors?.cli_apellidos?.message}
                            required={true}
                            register={{
                                ...register('cli_apellidos', {
                                    required: 'El apellido es requerido',
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El apellido solo puede contener letras y espacios"
                                    }
                                })
                            }}
                        />


                        <InputText
                            col={rwd.client_data1}
                            label='Domicilio'
                            id='cli_domicilio'
                            error={errors?.cli_domicilio?.message}
                            required={true}
                            register={{ ...register('cli_domicilio', { required: 'El domicilio es requerido' }) }}
                        />
                        <InputText
                            col={rwd.client_data1}
                            label='Referencia domicilio'
                            id='cli_ref_domicilio'
                            error={errors?.cli_ref_domicilio?.message}
                            register={{ ...register('cli_ref_domicilio') }}
                        />
                        <InputSelect
                            col={rwd.client_data1}
                            label='Vivienda'
                            id='cli_vivienda'
                            error={errors?.cli_vivienda?.message}
                            required={true}
                            register={{ ...register('cli_vivienda', { required: 'El tipo de vivienda es requerido' }) }}
                        >
                            {housingType?.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                        </InputSelect>


                        <InputSelect
                            col={rwd.client_data1}
                            label='Estado civil'
                            id='cli_estado_civil'
                            error={errors?.cli_estado_civil?.message}
                            required={true}
                            register={{ ...register('cli_estado_civil', { required: 'El estado civil es requerido' }) }}
                        >
                            {civilStatus?.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                        </InputSelect>
                        <InputText
                            col={rwd.client_data1}
                            label='Celular 1'
                            id='cli_celular1'
                            error={errors?.cli_celular1?.message}
                            required={true}
                            register={{
                                ...register('cli_celular1', {
                                    required: 'El celular 1 es requerido',
                                    pattern: {
                                        value: /^\+[0-9\s]+$/,
                                        message: "El el formato debe ser asi: +51 925 072 688",
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.client_data1}
                            label='Celular 2'
                            id='cli_celular2'
                            error={errors?.cli_celular2?.message}
                            register={{
                                ...register('cli_celular2', {
                                    pattern: {
                                        value: /^\+[0-9\s]+$/,
                                        message: "El el formato debe ser asi: +51 925 072 688",
                                    }
                                })
                            }}
                        />


                        <InputText
                            col={rwd.client_data1}
                            label='Correo'
                            id='cli_correo'
                            error={errors?.cli_correo?.message}
                            required={true}
                            register={{
                                ...register('cli_correo', {
                                    required: 'El correo es requerido',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Ingresa un correo valido: ejemplo@gmail.com"
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.client_data2}
                            label='Observacion'
                            id='clie_obs'
                            error={errors?.clie_obs?.message}
                            register={{ ...register('clie_obs') }}
                        />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='2'>
                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputText
                            col={rwd.busines_data}
                            label='Actividad negocio'
                            id='neg_actividad'
                            error={errors?.neg_actividad?.message}
                            required={true}
                            register={{
                                ...register('neg_actividad', {
                                    required: 'La actividad del negocio es requerida'
                                })
                            }}
                        />
                        <InputText
                            col={rwd.busines_data}
                            label='Direccion Negocio'
                            id='neg_direccion'
                            error={errors?.neg_direccion?.message}
                            required={true}
                            register={{ ...register('neg_direccion', { required: 'La dirección del negocio es requerida' }) }}
                        />
                        <InputText
                            col={rwd.busines_data}
                            label='Referencia Negocio'
                            id='neg_referencia'
                            error={errors?.neg_referencia?.message}
                            register={{ ...register('neg_referencia') }} />
                        <InputText
                            col={rwd.busines_data}
                            label='Observación'
                            id='neg_observacion'
                            error=""
                            register={{ ...register('neg_observacion') }}
                        />
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
                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputNumber
                            col={rwd.loan_data1}
                            label='Solicitado'
                            id='pres_solicitado' money
                            error={errors?.pres_solicitado?.message}
                            required={true}
                            register={{
                                ...register('pres_solicitado', {
                                    required: 'El préstamo solicitado es requerido'
                                })
                            }}
                        />
                        <InputNumber
                            col={rwd.loan_data1}
                            label='Aprobado'
                            id='pres_aprobado' money
                            error={errors?.pres_aprobado?.message}
                            register={{ ...register('pres_aprobado') }}
                        />
                        <InputDate
                            col={rwd.loan_data1}
                            label='Fecha de emision'
                            id='pres_fecha_emision'
                            error={errors?.pres_fecha_emision?.message}
                            register={{ ...register('pres_fecha_emision', { required: 'La fecha de emisión es requerida' }) }}
                        />
                        <InputDate
                            col={rwd.loan_data1}
                            label='Fecha desembolso'
                            id='pres_fecha_desembolso'
                            error={errors?.pres_fecha_desembolso?.message}
                            register={{ ...register('pres_fecha_desembolso') }}
                        />


                        <InputNumber
                            col={rwd.loan_data1}
                            label='Plazo'
                            id='pres_plazo'
                            error={errors?.pres_plazo?.message}
                            required={true}
                            register={{ ...register('pres_plazo', { required: 'El plazo del crédito es requerido' }) }}
                        />
                        <InputSelect
                            col={rwd.loan_data1}
                            label='Tipo plazo'
                            id='pres_tipo_plazo'
                            error={errors?.pres_tipo_plazo?.message}
                            required={true}
                            register={{ ...register('pres_tipo_plazo', { required: 'El tipo de plazo es requerido' }) }}
                        >
                            {periodType?.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                        </InputSelect>

                        <InputSelect
                            col={rwd.loan_data1}
                            label='Tipo interes'
                            id='pres_interes'
                            error={errors?.pres_interes?.message}
                            required={true}
                            register={{ ...register('pres_interes', { required: 'El tipo de interes es requerido' }) }}
                        >
                            {financialInterestRate?.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                        </InputSelect>
                        <InputNumber
                            col={rwd.loan_data1}
                            label='Tasa%'
                            id='pres_tasa'
                            error={errors?.pres_tasa?.message}
                            required={true}
                            register={{ ...register('pres_tasa', { required: 'La tasa es requerida' }) }}
                        />


                        <InputNumber
                            col={rwd.loan_data1}
                            label='Ventas diarias'
                            id='pres_ventas_diarias' money
                            error={errors?.pres_ventas_diarias?.message}
                            required={true}
                            register={{ ...register('pres_ventas_diarias', { required: 'Ventas diarias es requerido' }) }}
                        />
                        <InputNumber
                            col={rwd.loan_data1}
                            label='Días buenos'
                            id='pres_dias_buenos' money
                            error={errors?.pres_dias_buenos?.message}
                            required={true}
                            register={{ ...register('pres_dias_buenos', { required: 'Ventas en días buenos es requerido' }) }}
                        />
                        <InputNumber
                            col={rwd.loan_data1}
                            label='Días malos'
                            id='pres_dias_malos' money
                            error={errors?.pres_dias_malos?.message}
                            required={true}
                            register={{ ...register('pres_dias_malos', { required: 'Ventas en días malos es requerido' }) }}
                        />
                        <InputNumber
                            col={rwd.loan_data1}
                            label='Inventario'
                            id='pres_inventario' money
                            error={errors?.pres_inventario?.message}
                            required={true}
                            register={{ ...register('pres_inventario', { required: 'El valor del inventario es requerido' }) }}
                        />
                    </InputsRow>

                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputChekbox
                            col={rwd.loan_data2}
                            label='Recibo de luz'
                            id='recibo_luz'
                            error={errors?.recibo_luz?.message}
                            register={{ ...register('recibo_luz') }}
                        />
                        <InputChekbox
                            col={rwd.loan_data2}
                            label='Mayor de 21 años'
                            id='mayor_21'
                            error={errors?.mayor_21?.message}
                            register={{ ...register('mayor_21') }}
                        />
                        <InputChekbox
                            col={rwd.loan_data2}
                            label='DNI vigente'
                            id='dni_vigente'
                            error={errors?.dni_vigente?.message}
                            register={{ ...register('dni_vigente') }}
                        />


                        <InputChekbox
                            col={rwd.loan_data2}
                            label='Documentos de propiedad del negocio'
                            id='doc_negocio'
                            error={errors?.doc_negocio?.message}
                            register={{ ...register('doc_negocio') }}
                        />
                        <InputChekbox
                            col={rwd.loan_data2}
                            label='Documentos de propiedad de vivienda'
                            id='doc_vivienda'
                            error={errors?.doc_vivienda?.message}
                            register={{ ...register('doc_vivienda') }}
                        />
                        <InputChekbox
                            col={rwd.loan_data2}
                            label='Comprobantes negocio'
                            id='compr_negocio'
                            error={errors?.compr_negocio?.message}
                            register={{ ...register('compr_negocio') }}
                        />
                    </InputsRow>
                </div>
                <div className='form-tab__body-inputs' id='4'>
                    <h2 className='form-tab__body-title'>Referencia 1</h2>
                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputText
                            col={rwd.DNI}
                            label='DNI'
                            id='ref1_dni'
                            error={errors?.ref1_dni?.message}
                            register={{
                                ...register('ref1_dni', {
                                    maxLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    minLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "El DNI solo puede contener números!"
                                    },
                                })
                            }}
                        />
                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>
                        <InputText
                            col={rwd.ref_data1}
                            label='Nombres'
                            error={errors?.ref1_nombres?.message}
                            register={{
                                ...register('ref1_nombres', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El nombre solo puede contener letras y espacios"
                                    }
                                })
                            }} id='ref1_nombres'
                        />
                        <InputText
                            col={rwd.ref_data1}
                            label='Apellidos'
                            error={errors?.ref1_apellidos?.message}
                            register={{
                                ...register('ref1_apellidos', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El apellido solo puede contener letras y espacios"
                                    }
                                })
                            }} id='ref1_apellidos'
                        />


                        <InputText
                            col={rwd.ref_data1}
                            label='Domicilio'
                            error={errors?.ref1_domicilio?.message}
                            register={{ ...register('ref1_domicilio') }} id='ref1_domicilio'
                        />
                        <InputText
                            col={rwd.ref_data2}
                            label='Parentesco'
                            error={errors?.ref1_parentesco?.message}
                            register={{ ...register('ref1_parentesco') }} id='ref1_parentesco'
                        />
                        <InputText
                            col={rwd.ref_data2}
                            label='Celular'
                            id='ref1_celular1'
                            error={errors?.ref1_celular1?.message}
                            register={{
                                ...register('ref1_celular1', {
                                    pattern: {
                                        value: /^\+[0-9\s]+$/,
                                        message: "El el formato debe ser asi: +51 925 072 688",
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.ref_data2}
                            label='Correo'
                            id='ref1_correo'
                            error={errors?.ref1_correo?.message}
                            register={{
                                ...register('ref1_correo', {
                                    required: 'El correo es requerido',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Ingresa un correo valido: ejemplo@gmail.com"
                                    }
                                })
                            }}
                        />
                    </InputsRow>

                    <hr />
                    <h2 className='form-tab__body-title'>Referencia 2</h2>

                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputText
                            col={rwd.DNI}
                            label='DNI'
                            id='ref2_dni'
                            error={errors?.ref2_dni?.message}
                            register={{
                                ...register('ref2_dni', {
                                    maxLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    minLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "El DNI solo puede contener números!"
                                    },
                                })
                            }}
                        />

                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>

                        <InputText
                            col={rwd.ref_data1}
                            label='Nombres'
                            error={errors?.ref2_nombres?.message}
                            register={{
                                ...register('ref2_nombres', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El nombre solo puede contener letras y espacios"
                                    }
                                })
                            }} id='ref2_nombres'
                        />
                        <InputText
                            col={rwd.ref_data1}
                            label='Apellidos'
                            error={errors?.ref2_apellidos?.message}
                            register={{
                                ...register('ref2_apellidos', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El apellido solo puede contener letras y espacios"
                                    }
                                })
                            }} id='ref2_apellidos'
                        />


                        <InputText
                            col={rwd.ref_data1}
                            label='Domicilio'
                            error={errors?.ref2_domicilio?.message}
                            register={{ ...register('ref2_domicilio') }} id='ref2_domicilio'
                        />
                        <InputText
                            col={rwd.ref_data2}
                            label='Parentesco'
                            error={errors?.ref2_parentesco?.message}
                            register={{ ...register('ref2_parentesco') }} id='ref2_parentesco'
                        />
                        <InputText
                            col={rwd.ref_data2}
                            label='Celular'
                            id='ref2_celular1'
                            error={errors?.ref2_celular1?.message}
                            register={{
                                ...register('ref2_celular1', {
                                    pattern: {
                                        value: /^\+[0-9\s]+$/,
                                        message: "El el formato debe ser asi: +51 925 072 688",
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.ref_data2}
                            label='Correo'
                            id='ref2_correo'
                            error={errors?.ref2_correo?.message}
                            register={{
                                ...register('ref2_correo', {
                                    required: 'El correo es requerido',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Ingresa un correo valido: ejemplo@gmail.com"
                                    }
                                })
                            }}
                        />
                    </InputsRow>

                </div>
                <div className='form-tab__body-inputs' id='5'>
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputText
                            col={rwd.DNI}
                            label='DNI'
                            id='aval1_dni'
                            error={errors?.aval1_dni?.message}
                            register={{
                                ...register('aval1_dni', {
                                    maxLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    minLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "El DNI solo puede contener números!"
                                    },
                                })
                            }}
                        />

                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>

                        <InputText
                            col={rwd.aval_data}
                            label='Nombres'
                            id='aval1_nombres'
                            error={errors?.aval1_nombres?.message}
                            register={{
                                ...register('aval1_nombres', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El nombre solo puede contener letras y espacios"
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.aval_data}
                            label='Apellidos'
                            id='aval1_apellidos'
                            error={errors?.aval1_apellidos?.message}
                            register={{
                                ...register('aval1_apellidos', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El apellido solo puede contener letras y espacios"
                                    }
                                })
                            }}
                        />


                        <InputText
                            col={rwd.aval_data}
                            label='Domicilio'
                            id='aval1_domicilio'
                            error={errors?.aval1_domicilio?.message}
                            register={{ ...register('aval1_domicilio') }}
                        />
                        <InputText
                            col={rwd.aval_data}
                            label='Correo'
                            id='aval1_correo'
                            error={errors?.aval1_correo?.message}
                            register={{
                                ...register('aval1_correo', {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Ingresa un correo valido: ejemplo@gmail.com"
                                    }
                                })
                            }}
                        />
                        <InputText
                            col={rwd.aval_data}
                            label='Celular 1'
                            id='aval1_celular1'
                            error={errors?.aval1_celular1?.message}
                            register={{
                                ...register('aval1_celular1', {
                                    pattern: {
                                        value: /^\+[0-9\s]+$/,
                                        message: "El el formato debe ser asi: +51 925 072 688",
                                    }
                                })
                            }}
                        />
                    </InputsRow>
                    <hr />
                    <h2 className='form-tab__body-title'>Aval 1</h2>
                    <InputsRow margin='1.6' gap='1.6rem 0rem'>
                        <InputText
                            col={rwd.DNI}
                            label='DNI'
                            id='aval2_dni'
                            error={errors?.aval2_dni?.message}
                            register={{
                                ...register('aval2_dni', {
                                    maxLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    minLength: { value: 8, message: "El DNI debe tener 8 números" },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "El DNI solo puede contener números!"
                                    },
                                })
                            }}
                        />

                        <FragmentContainer col={rwd.buttonSearchDNI}>
                            <Button width='8.7rem' className='primary' content='Buscar' />
                        </FragmentContainer>

                        <InputText
                            col={rwd.aval_data}
                            label='Nombres'
                            id='aval2_nombres'
                            error={errors?.aval2_nombres?.message}
                            register={{
                                ...register('aval2_nombres', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El nombre solo puede contener letras y espacios"
                                    }
                                })
                            }}
                        />

                        <InputText
                            col={rwd.aval_data}
                            label='Apellidos'
                            id='aval2_apellidos'
                            error={errors?.aval2_apellidos?.message}
                            register={{
                                ...register('aval2_apellidos', {
                                    pattern: {
                                        value: /^[a-zA-Z ]{2,254}$/,
                                        message: "El apellido solo puede contener letras y espacios"
                                    }
                                })
                            }}
                        />

                        <InputText
                            col={rwd.aval_data}
                            label='Domicilio'
                            id='aval2_domicilio'
                            error={errors?.aval2_domicilio?.message}
                            register={{ ...register('aval2_domicilio') }}
                        />

                        <InputText
                            col={rwd.aval_data}
                            label='Correo'
                            id='aval2_correo'
                            error={errors?.aval2_correo?.message}
                            register={{
                                ...register('aval2_correo', {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Ingresa un correo valido: ejemplo@gmail.com"
                                    }
                                })
                            }}
                        />

                        <InputText
                            col={rwd.aval_data}
                            label='Celular 1'
                            id='aval2_celular1'
                            error={errors?.aval2_celular1?.message}
                            register={{
                                ...register('aval2_celular1', {
                                    pattern: {
                                        value: /^\+[0-9\s]+$/,
                                        message: "El el formato debe ser asi: +51 925 072 688",
                                    }
                                })
                            }}
                        />
                    </InputsRow>
                </div>
            </form>
        </div>
    )
}
