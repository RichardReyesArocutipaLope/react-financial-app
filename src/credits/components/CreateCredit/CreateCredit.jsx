import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useResponsiveForm } from '../../../hooks';
import moment from 'moment/moment';
import {
	Button,
	FlexContainer,
	FormTab,
	FragmentContainer,
	InputChekbox,
	InputDate,
	InputFileDocument,
	InputFileImage,
	InputNumber,
	InputSelect,
	InputText,
	InputsRow,
} from '../../../ui/components';
import { startNewCredit } from '../../../store/credits/thunks';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { setActivateAlert } from '../../../store/credits/creditsSlice';
import { labelTabsHeader } from './dataCreateCredit';
import './CreateCredit.css';

const defaultValues = {
	pres_fecha_emision: moment().format('YYYY-MM-DD'),
};

const initialResponsive = [
	{ name: 'DNI', xxs: 24, xs: 24, s: 16, m: 7, l: 7, xl: 5, xxl: 5 },
	{ name: 'btnDNI', xxs: 24, xs: 24, s: 8, m: 5, l: 5, xl: 3, xxl: 3 },
	{ name: 'data2', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 8, xxl: 8 },
	{ name: 'client_2', xxs: 24, xs: 24, s: 24, m: 24, l: 24, xl: 16, xxl: 16 },
	{ name: 'busines_1', xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 12, xxl: 12 },
	{ name: 'loan_1', xxs: 24, xs: 24, s: 12, m: 8, l: 8, xl: 6, xxl: 6 },
	{ name: 'loan_2', xxs: 24, xs: 24, s: 12, m: 12, l: 8, xl: 8, xxl: 8 },
	{ name: 'data3', xxs: 24, xs: 24, s: 12, m: 6, l: 6, xl: 4, xxl: 4 },
];

let ref1 = false;
let ref2 = false;
let aval1 = false;
let aval2 = false;

export const CreateCredit = ({ setIsOpenModal, modalReset, modalSubmit }) => {
	const dispatch = useDispatch();
	const { analistas, cobradores } = useSelector(state => state.roles);
	const { periodType } = useSelector(state => state.periodType);
	const { financialInterestRate } = useSelector(state => state.financialInterestRate);
	const { civilStatus } = useSelector(state => state.civilStatus);
	const { housingType } = useSelector(state => state.housingType);
	const { activateAlert, message } = useSelector(state => state.credits);
	const { rwd, centinela } = useResponsiveForm(initialResponsive);
	const { setDataAlert } = useContext(AlertContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		watch,
	} = useForm({ defaultValues });

	const [validForm, setvalidForm] = useState(0);
	const validationForm = () => {
		ref1 = !!(
			watch('ref1_dni').trim() ||
			watch('ref1_nombres').trim() ||
			watch('ref1_apellidos').trim() ||
			watch('ref1_domicilio').trim() ||
			watch('ref1_celular1').trim()
		);
		ref2 = !!(
			watch('ref2_dni').trim() ||
			watch('ref2_nombres').trim() ||
			watch('ref2_apellidos').trim() ||
			watch('ref2_domicilio').trim() ||
			watch('ref2_celular1').trim()
		);
		aval1 = !!(
			watch('aval1_dni').trim() ||
			watch('aval1_nombres').trim() ||
			watch('aval1_apellidos').trim() ||
			watch('aval1_celular1').trim() ||
			watch('aval1_domicilio').trim()
		);
		aval2 = !!(
			watch('aval2_dni').trim() ||
			watch('aval2_nombres').trim() ||
			watch('aval2_apellidos').trim() ||
			watch('aval2_celular1').trim() ||
			watch('aval2_domicilio').trim()
		);
		setvalidForm(state => state + 1);
	};
	useEffect(() => {
		if (validForm) {
			if (Object.keys(errors).length !== 0) return;
			handleSubmit(data => dispatch(startNewCredit(data)))();
		}
	}, [validForm]);

	const onAlert = () => {
		setDataAlert({
			type: activateAlert.type,
			errorCode: message.statusCode,
			message: message.message,
			time: 3000,
		});
		dispatch(setActivateAlert({ isActive: false, type: '' }));
		if (activateAlert.type === 'success') setIsOpenModal(false);
	};

	useEffect(() => {
		if (modalSubmit) validationForm();
	}, [modalSubmit]);

	useEffect(() => {
		if (modalReset) reset();
	}, [modalReset]);

	useEffect(() => {
		if (activateAlert.isActive) onAlert();
	}, [activateAlert.isActive]);

	return (
		<FormTab labelTabsHeader={labelTabsHeader} centinela={centinela}>
			<div className='form-tab__body-inputs' id='1'>
				<InputsRow margin='1.6' gap='1.6rem 0rem'>
					<InputNumber col={rwd.data3} label='N. Operación' register={{ ...register('n_operacion') }} />
					<InputNumber col={rwd.data3} label='N. Crédito' register={{ ...register('n_credito') }} />
					<InputSelect
						col={rwd.data2}
						label='Analista'
						error={errors?.analista?.message}
						required={true}
						register={{
							...register('analista', {
								required: 'El analista es requerido',
							}),
						}}
					>
						{analistas?.map(({ id, fullname }) => (
							<option key={id} value={id}>
								{fullname}
							</option>
						))}
					</InputSelect>
					<InputSelect
						col={rwd.data2}
						label='Cobrador'
						error={errors?.cobrador?.message}
						required={true}
						register={{
							...register('cobrador', {
								required: 'El cobrador es requerido',
							}),
						}}
					>
						{cobradores?.map(({ id, fullname }) => (
							<option key={id} value={id}>
								{fullname}
							</option>
						))}
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
							...register('dni_cliente', {
								required: 'El DNI es requerido',
								maxLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								minLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								pattern: {
									value: /^[0-9]+$/,
									message: 'El DNI solo puede contener números!',
								},
							}),
						}}
					/>

					<FragmentContainer col={rwd.btnDNI}>
						<Button width='8.7rem' className='primary' content='Buscar' />
					</FragmentContainer>

					<InputText
						col={rwd.data2}
						label='Nombres'
						id='cli_nombre'
						error={errors?.cli_nombre?.message}
						required={true}
						register={{
							...register('cli_nombre', {
								required: 'El nombre es requerido',
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El nombre solo puede contener letras y espacios',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Apellidos'
						id='cli_apellidos'
						error={errors?.cli_apellidos?.message}
						required={true}
						register={{
							...register('cli_apellidos', {
								required: 'El apellido es requerido',
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El apellido solo puede contener letras y espacios',
								},
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Domicilio'
						id='cli_domicilio'
						error={errors?.cli_domicilio?.message}
						required={true}
						register={{
							...register('cli_domicilio', {
								required: 'El domicilio es requerido',
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Referencia domicilio'
						id='cli_ref_domicilio'
						error={errors?.cli_ref_domicilio?.message}
						register={{ ...register('cli_ref_domicilio') }}
					/>
					<InputSelect
						col={rwd.data2}
						label='Vivienda'
						error={errors?.cli_vivienda?.message}
						required={true}
						register={{
							...register('cli_vivienda', {
								required: 'El tipo de vivienda es requerido',
							}),
						}}
					>
						{housingType?.map(({ id, name }) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</InputSelect>

					<InputSelect
						col={rwd.data2}
						label='Estado civil'
						error={errors?.cli_estado_civil?.message}
						required={true}
						register={{
							...register('cli_estado_civil', {
								required: 'El estado civil es requerido',
							}),
						}}
					>
						{civilStatus?.map(({ id, name }) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</InputSelect>
					<InputText
						col={rwd.data2}
						label='Celular 1'
						id='cli_celular1'
						error={errors?.cli_celular1?.message}
						required={true}
						register={{
							...register('cli_celular1', {
								required: 'El celular 1 es requerido',
								pattern: {
									value: /^\+[0-9\s]+$/,
									message: 'El el formato debe ser asi: +51 925 072 688',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Celular 2'
						id='cli_celular2'
						error={errors?.cli_celular2?.message}
						register={{
							...register('cli_celular2', {
								pattern: {
									value: /^\+[0-9\s]+$/,
									message: 'El el formato debe ser asi: +51 925 072 688',
								},
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Correo'
						id='cli_correo'
						error={errors?.cli_correo?.message}
						register={{
							...register('cli_correo', {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Ingresa un correo valido: ejemplo@gmail.com',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.client_2}
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
						col={rwd.busines_1}
						label='Actividad negocio'
						id='neg_actividad'
						error={errors?.neg_actividad?.message}
						required={true}
						register={{
							...register('neg_actividad', {
								required: 'La actividad del negocio es requerida',
							}),
						}}
					/>
					<InputText
						col={rwd.busines_1}
						label='Direccion Negocio'
						id='neg_direccion'
						error={errors?.neg_direccion?.message}
						required={true}
						register={{
							...register('neg_direccion', {
								required: 'La dirección del negocio es requerida',
							}),
						}}
					/>
					<InputText
						col={rwd.busines_1}
						label='Referencia Negocio'
						id='neg_referencia'
						error={errors?.neg_referencia?.message}
						register={{ ...register('neg_referencia') }}
					/>
					<InputText
						col={rwd.busines_1}
						label='Observación'
						id='neg_observacion'
						error=''
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
						col={rwd.loan_1}
						label='Solicitado'
						money
						error={errors?.pres_solicitado?.message}
						required={true}
						register={{
							...register('pres_solicitado', {
								required: 'El préstamo solicitado es requerido',
							}),
						}}
					/>
					<InputNumber
						col={rwd.loan_1}
						label='Aprobado'
						money
						error={errors?.pres_aprobado?.message}
						register={{ ...register('pres_aprobado') }}
					/>
					<InputDate
						col={rwd.loan_1}
						label='Fecha de emision'
						id='pres_fecha_emision'
						disabled
						error={errors?.pres_fecha_emision?.message}
						register={{
							...register('pres_fecha_emision', {
								required: 'La fecha de emisión es requerida',
							}),
						}}
					/>
					<InputDate
						col={rwd.loan_1}
						label='Fecha desembolso'
						id='pres_fecha_desembolso'
						error={errors?.pres_fecha_desembolso?.message}
						register={{ ...register('pres_fecha_desembolso') }}
					/>

					<InputNumber
						col={rwd.loan_1}
						label='Plazo'
						error={errors?.pres_plazo?.message}
						required={true}
						register={{
							...register('pres_plazo', {
								required: 'El plazo del crédito es requerido',
							}),
						}}
					/>
					<InputSelect
						col={rwd.loan_1}
						label='Tipo plazo'
						error={errors?.pres_tipo_plazo?.message}
						required={true}
						register={{
							...register('pres_tipo_plazo', {
								required: 'El tipo de plazo es requerido',
							}),
						}}
					>
						{periodType?.map(({ id, name }) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</InputSelect>

					<InputSelect
						col={rwd.loan_1}
						label='Tipo interes'
						error={errors?.pres_interes?.message}
						required={true}
						register={{
							...register('pres_interes', {
								required: 'El tipo de interes es requerido',
							}),
						}}
					>
						{financialInterestRate?.map(({ id, name }) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</InputSelect>
					<InputNumber
						col={rwd.loan_1}
						label='Tasa%'
						error={errors?.pres_tasa?.message}
						required={true}
						register={{
							...register('pres_tasa', { required: 'La tasa es requerida' }),
						}}
					/>

					<InputNumber
						col={rwd.loan_1}
						label='Ventas diarias'
						money
						error={errors?.pres_ventas_diarias?.message}
						required={true}
						register={{
							...register('pres_ventas_diarias', {
								required: 'Ventas diarias es requerido',
							}),
						}}
					/>
					<InputNumber
						col={rwd.loan_1}
						label='Días buenos'
						money
						error={errors?.pres_dias_buenos?.message}
						required={true}
						register={{
							...register('pres_dias_buenos', {
								required: 'Ventas en días buenos es requerido',
							}),
						}}
					/>
					<InputNumber
						col={rwd.loan_1}
						label='Días malos'
						money
						error={errors?.pres_dias_malos?.message}
						required={true}
						register={{
							...register('pres_dias_malos', {
								required: 'Ventas en días malos es requerido',
							}),
						}}
					/>
					<InputNumber
						col={rwd.loan_1}
						label='Inventario'
						money
						error={errors?.pres_inventario?.message}
						required={true}
						register={{
							...register('pres_inventario', {
								required: 'El valor del inventario es requerido',
							}),
						}}
					/>
				</InputsRow>

				<InputsRow margin='1.6' gap='1.6rem 0rem'>
					<InputChekbox
						col={rwd.loan_2}
						label='Recibo de luz'
						id='recibo_luz'
						error={errors?.recibo_luz?.message}
						register={{ ...register('recibo_luz') }}
					/>
					<InputChekbox
						col={rwd.loan_2}
						label='Mayor de 21 años'
						id='mayor_21'
						error={errors?.mayor_21?.message}
						register={{ ...register('mayor_21') }}
					/>
					<InputChekbox
						col={rwd.loan_2}
						label='DNI vigente'
						id='dni_vigente'
						register={{ ...register('dni_vigente') }}
					/>

					<InputChekbox
						col={rwd.loan_2}
						label='Documentos de propiedad del negocio'
						id='doc_negocio'
						error={errors?.doc_negocio?.message}
						register={{ ...register('doc_negocio') }}
					/>
					<InputChekbox
						col={rwd.loan_2}
						label='Documentos de propiedad de vivienda'
						id='doc_vivienda'
						error={errors?.doc_vivienda?.message}
						register={{ ...register('doc_vivienda') }}
					/>
					<InputChekbox
						col={rwd.loan_2}
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
								required: { value: ref1, message: 'El DNI es requerido' },
								maxLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								minLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								pattern: {
									value: /^[0-9]+$/,
									message: 'El DNI solo puede contener números!',
								},
							}),
						}}
					/>
					<FragmentContainer col={rwd.btnDNI}>
						<Button width='8.7rem' className='primary' content='Buscar' />
					</FragmentContainer>
					<InputText
						col={rwd.data2}
						label='Nombres'
						error={errors?.ref1_nombres?.message}
						register={{
							...register('ref1_nombres', {
								required: { value: ref1, message: 'El nombre es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El nombre solo puede contener letras y espacios',
								},
							}),
						}}
						id='ref1_nombres'
					/>
					<InputText
						col={rwd.data2}
						label='Apellidos'
						error={errors?.ref1_apellidos?.message}
						register={{
							...register('ref1_apellidos', {
								required: { value: ref1, message: 'El apellido es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El apellido solo puede contener letras y espacios',
								},
							}),
						}}
						id='ref1_apellidos'
					/>

					<InputText
						col={rwd.data2}
						label='Domicilio'
						error={errors?.ref1_domicilio?.message}
						register={{
							...register('ref1_domicilio', {
								required: { value: ref1, message: 'El domicilio es requerido' },
							}),
						}}
						id='ref1_domicilio'
					/>
					<InputText
						col={rwd.data3}
						label='Parentesco'
						error={errors?.ref1_parentesco?.message}
						register={{ ...register('ref1_parentesco') }}
						id='ref1_parentesco'
					/>
					<InputText
						col={rwd.data3}
						label='Celular'
						id='ref1_celular1'
						error={errors?.ref1_celular1?.message}
						register={{
							...register('ref1_celular1', {
								required: { value: ref1, message: 'El celular es requerido' },
								pattern: {
									value: /^\+[0-9\s]+$/,
									message: 'El el formato debe ser asi: +51 925 072 688',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Correo'
						id='ref1_correo'
						error={errors?.ref1_correo?.message}
						register={{
							...register('ref1_correo', {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Ingresa un correo valido: ejemplo@gmail.com',
								},
							}),
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
								required: { value: ref2, message: 'El DNI es requerido' },
								maxLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								minLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								pattern: {
									value: /^[0-9]+$/,
									message: 'El DNI solo puede contener números!',
								},
							}),
						}}
					/>

					<FragmentContainer col={rwd.btnDNI}>
						<Button width='8.7rem' className='primary' content='Buscar' />
					</FragmentContainer>

					<InputText
						col={rwd.data2}
						label='Nombres'
						error={errors?.ref2_nombres?.message}
						register={{
							...register('ref2_nombres', {
								required: { value: ref2, message: 'El nombre es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El nombre solo puede contener letras y espacios',
								},
							}),
						}}
						id='ref2_nombres'
					/>
					<InputText
						col={rwd.data2}
						label='Apellidos'
						error={errors?.ref2_apellidos?.message}
						register={{
							...register('ref2_apellidos', {
								required: { value: ref2, message: 'El apellido es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El apellido solo puede contener letras y espacios',
								},
							}),
						}}
						id='ref2_apellidos'
					/>

					<InputText
						col={rwd.data2}
						label='Domicilio'
						error={errors?.ref2_domicilio?.message}
						register={{
							...register('ref2_domicilio', {
								required: { value: ref2, message: 'El domicilio es requerido' },
							}),
						}}
						id='ref2_domicilio'
					/>
					<InputText
						col={rwd.data3}
						label='Parentesco'
						error={errors?.ref2_parentesco?.message}
						register={{ ...register('ref2_parentesco') }}
						id='ref2_parentesco'
					/>
					<InputText
						col={rwd.data3}
						label='Celular'
						id='ref2_celular1'
						error={errors?.ref2_celular1?.message}
						register={{
							...register('ref2_celular1', {
								required: { value: ref2, message: 'El celular es requerido' },
								pattern: {
									value: /^\+[0-9\s]+$/,
									message: 'El el formato debe ser asi: +51 925 072 688',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Correo'
						id='ref2_correo'
						error={errors?.ref2_correo?.message}
						register={{
							...register('ref2_correo', {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Ingresa un correo valido: ejemplo@gmail.com',
								},
							}),
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
								required: { value: aval1, message: 'El DNI es requerido' },
								maxLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								minLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								pattern: {
									value: /^[0-9]+$/,
									message: 'El DNI solo puede contener números!',
								},
							}),
						}}
					/>

					<FragmentContainer col={rwd.btnDNI}>
						<Button width='8.7rem' className='primary' content='Buscar' />
					</FragmentContainer>

					<InputText
						col={rwd.data2}
						label='Nombres'
						id='aval1_nombres'
						error={errors?.aval1_nombres?.message}
						register={{
							...register('aval1_nombres', {
								required: { value: aval1, message: 'El nombre es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El nombre solo puede contener letras y espacios',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Apellidos'
						id='aval1_apellidos'
						error={errors?.aval1_apellidos?.message}
						register={{
							...register('aval1_apellidos', {
								required: { value: aval1, message: 'El apellido es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El apellido solo puede contener letras y espacios',
								},
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Domicilio'
						id='aval1_domicilio'
						error={errors?.aval1_domicilio?.message}
						register={{ ...register('aval1_domicilio', { required: aval1 }) }}
					/>
					<InputText
						col={rwd.data2}
						label='Correo'
						id='aval1_correo'
						error={errors?.aval1_correo?.message}
						register={{
							...register('aval1_correo', {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Ingresa un correo valido: ejemplo@gmail.com',
								},
							}),
						}}
					/>
					<InputText
						col={rwd.data2}
						label='Celular 1'
						id='aval1_celular1'
						error={errors?.aval1_celular1?.message}
						register={{
							...register('aval1_celular1', {
								required: { value: aval1, message: 'El celular es requerido' },
								pattern: {
									value: /^\+[0-9\s]+$/,
									message: 'El el formato debe ser asi: +51 925 072 688',
								},
							}),
						}}
					/>
				</InputsRow>
				<hr />
				<h2 className='form-tab__body-title'>Aval 2</h2>
				<InputsRow margin='1.6' gap='1.6rem 0rem'>
					<InputText
						col={rwd.DNI}
						label='DNI'
						id='aval2_dni'
						error={errors?.aval2_dni?.message}
						register={{
							...register('aval2_dni', {
								required: { value: aval2, message: 'El dni es requerido' },
								maxLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								minLength: {
									value: 8,
									message: 'El DNI debe tener 8 números',
								},
								pattern: {
									value: /^[0-9]+$/,
									message: 'El DNI solo puede contener números!',
								},
							}),
						}}
					/>

					<FragmentContainer col={rwd.btnDNI}>
						<Button width='8.7rem' className='primary' content='Buscar' />
					</FragmentContainer>

					<InputText
						col={rwd.data2}
						label='Nombres'
						id='aval2_nombres'
						error={errors?.aval2_nombres?.message}
						register={{
							...register('aval2_nombres', {
								required: { value: aval2, message: 'El nombre es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El nombre solo puede contener letras y espacios',
								},
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Apellidos'
						id='aval2_apellidos'
						error={errors?.aval2_apellidos?.message}
						register={{
							...register('aval2_apellidos', {
								required: { value: aval2, message: 'El apellido es requerido' },
								pattern: {
									value: /^[a-zA-Z ]{2,254}$/,
									message: 'El apellido solo puede contener letras y espacios',
								},
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Domicilio'
						id='aval2_domicilio'
						error={errors?.aval2_domicilio?.message}
						register={{
							...register('aval2_domicilio', {
								required: { value: aval2, message: 'El domicilio es requerido' },
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Correo'
						id='aval2_correo'
						error={errors?.aval2_correo?.message}
						register={{
							...register('aval2_correo', {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Ingresa un correo valido: ejemplo@gmail.com',
								},
							}),
						}}
					/>

					<InputText
						col={rwd.data2}
						label='Celular 1'
						id='aval2_celular1'
						error={errors?.aval2_celular1?.message}
						register={{
							...register('aval2_celular1', {
								required: { value: aval2, message: 'El celular es requerido' },
								pattern: {
									value: /^\+[0-9\s]+$/,
									message: 'El el formato debe ser asi: +51 925 072 688',
								},
							}),
						}}
					/>
				</InputsRow>
			</div>
		</FormTab>
	);
};
