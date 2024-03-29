import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useExcel, usePdf, useResponsiveForm } from '../../../hooks';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useFilterCredits } from '../../../credits/hooks';
import {
	InputSelect,
	InputsRow,
	InputSearch,
	InputMoneyRange,
	InputDateRange,
	FragmentContainer,
	Button,
} from '../';
import './Filter.css';
import { memo } from 'react';

const initialResponsive = [
	{ name: 'filter', xxs: 24, s: 12, m: 12, l: 8, xl: 6, xxl: 6, col: 6 },
	{ name: 'search', xxs: 24, s: 24, m: 12, l: 8, xl: 6, xxl: 6, col: 6 },
	{ name: 'buttons', xxs: 24, s: 24, m: 24, l: 24, xl: 12, xxl: 12, col: 6 },
];

const iconPdf = <i className='fa-solid fa-file-pdf icon'></i>;
const iconXlsx = <i className='fa-solid fa-file-excel icon'></i>;
const iconFilter = <i className='fa-solid fa-filter icon'></i>;

export const Filter = memo(({ credits }) => {
	// console.log('Filter.jsx');

	const { register, handleSubmit, reset } = useForm();
	const { rwd, centinela } = useResponsiveForm(initialResponsive);
	const { analistas, cobradores } = useSelector(state => state.roles);
	const { onSearch, onSubmit, onReset } = useFilterCredits(reset);

	const { saveExcel } = useExcel(credits);
	const { documento } = usePdf(credits, analistas, cobradores);

	return (
		<form className='main-filter' onSubmit={handleSubmit(onSubmit)}>
			<InputsRow margin='.5' gap='1.3rem 0rem'>
				{centinela > 1024 && (
					<>
						<InputDateRange
							col={rwd.filter}
							label='Rango de fecha'
							registerFrom={{ ...register('range_date_from') }}
							registerTo={{ ...register('range_date_to') }}
						/>

						<InputMoneyRange
							col={rwd.filter}
							label='Rango de préstamo'
							registerFrom={{ ...register('range_loan_from') }}
							registerTo={{ ...register('range_loan_to') }}
						/>

						<InputSelect col={rwd.filter} label='Estado' register={{ ...register('state') }}>
							<option value='RE'>Renovado</option>
							<option value='NU'>Nuevo</option>
							<option value='AP'>Aprobado</option>
							<option value='DE'>Desembolsado</option>
						</InputSelect>

						<InputSelect col={rwd.filter} label='Analista' register={{ ...register('id_analista') }}>
							{analistas?.map(({ id, fullname }) => (
								<option value={id} key={id}>
									{fullname}
								</option>
							))}
						</InputSelect>

						<InputSelect col={rwd.filter} label='Cobrador' register={{ ...register('id_cobrador') }}>
							{cobradores?.map(({ id, fullname }) => (
								<option value={id} key={id}>
									{fullname}
								</option>
							))}
						</InputSelect>
					</>
				)}

				<InputSearch
					col={rwd.search}
					width='30rem'
					placeholder='Busque por DNI o nombre de cliente'
					register={{ ...register('search') }}
				/>

				<FragmentContainer col={rwd.buttons} justifyContent={`${centinela <= 1024 ? 'center' : 'start'}`}>
					<Button event={handleSubmit(onSearch)} width='8rem' className='primary' content='Buscar' />
					<Button type='submit' width='8rem' className='dark' content='Filtrar' />
					{centinela > 1024 && (
						<>
							<Button event={onReset} width='8rem' className='warning' content='Reiniciar' />
							<PDFDownloadLink document={documento} fileName='Reporte_creditos.pdf'>
								<Button width='5rem' className='print-pdf' content={iconPdf} />
							</PDFDownloadLink>
							<Button width='5rem' className='print-xlsx' content={iconXlsx} event={saveExcel} />
						</>
					)}
					{centinela <= 1024 && <Button width='4rem' className='info' content={iconFilter} />}
				</FragmentContainer>
			</InputsRow>
		</form>
	);
});
