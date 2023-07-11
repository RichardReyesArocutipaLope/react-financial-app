import { useForm } from 'react-hook-form';
import { useResponsiveForm } from '../../../hooks';
import { Button } from '../button';
import { FragmentContainer } from '../fragmentContainer';
import { InputDateRange } from '../inputDateRange';
import { InputMoneyRange } from '../inputMoneyRange';
import { InputSearch } from '../inputSearch';
import { InputSelect } from '../inputSelect';
import { InputsRow } from '../inputsRow';
import './Filter.css'
import { MyDocument } from '../../../credits/views/credits/MyDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const Filter = ({ setdataForFilter, analistas, cobradores, adaptedCredits, thead, dataFilter }) => {

  const initialResponsive = [
    { name: 'filter', xxs: 24, s: 12, m: 12, l: 8, xl: 6, xxl: 6, col: 6 },
    { name: 'buttons', xxs: 24, s: 24, m: 24, l: 24, xl: 16, xxl: 16, col: 6 },
  ]

  const { rwd, centinela } = useResponsiveForm(initialResponsive);

  const { register, handleSubmit, reset } = useForm()

  const onSearch = (data) => {
    setdataForFilter({
      searchValue: data.search,
      state: null,
      dateRangeFirst: null,
      dateRangeLast: null,
      moneyRangeFirst: null,
      moneyRangeLast: null,
      idAnalista: null,
      idCobrador: null,
    })
    console.log({ search: data.search }, 'Se realizo la busqueda')
  }

  const onSubmit = (data) => {
    setdataForFilter({
      searchValue: data.search,
      state: data.state || null,
      dateRangeFirst: data.range_date_from || null,
      dateRangeLast: data.range_date_to || null,
      moneyRangeFirst: +data.range_loan_from || null,
      moneyRangeLast: +data.range_loan_to || null,
      idAnalista: +data.id_analista || null,
      idCobrador: +data.id_cobrador || null,
    })
    console.log(data, 'Se aplico el filtro entero')
  }

  const onReset = () => {
    reset()
    setdataForFilter({
      searchValue: '',
      state: null,
      dateRangeFirst: null,
      dateRangeLast: null,
      moneyRangeFirst: null,
      moneyRangeLast: null,
      idAnalista: null,
      idCobrador: null,
    })
    console.log('Se reinicio el filtro')
  }

  return (
    <form className='main-filter' onSubmit={handleSubmit(onSubmit)}>

      <InputsRow margin='.5' gap='1.3rem 0rem'>
        {
          centinela > 1024 &&
          <>
            <InputDateRange
              col={rwd.filter}
              label='Rango Date'
              registerFrom={{ ...register('range_date_from') }}
              registerTo={{ ...register('range_date_to') }}
            />
            <InputMoneyRange
              col={rwd.filter}
              label='Rango Saldo'
              registerFrom={{ ...register('range_loan_from') }}
              registerTo={{ ...register('range_loan_to') }}
            />
            <InputSelect
              col={rwd.filter} label='Estado'
              id='estado' register={{ ...register('state') }}
            >
              <option value="">No especificado</option>
              <option value="NU">Nuevo</option>
              <option value="RE">Renovado</option>
              <option value="AP">Aprobado</option>
              <option value="DE">Desembolsado</option>
              <option value="RC">Rechazado</option>
            </InputSelect>

            <InputSelect
              col={rwd.filter} label='Analista'
              id='analista' register={{ ...register('id_analista') }}
            >
              <option value="">No especificado</option>
              {analistas?.map((analista) => (
                <option value={analista.id}>{analista.fullname}</option>
              ))}
            </InputSelect>

            <InputSelect
              col={rwd.filter} label='Cobrador'
              id='cobrador' register={{ ...register('id_cobrador') }}
            >
              <option value="">No especificado</option>
              {cobradores?.map((cobrador) => (
                <option value={cobrador.id}>{cobrador.fullname}</option>
              ))}
            </InputSelect>
          </>
        }

        <InputSearch
          col={rwd.filter} width='30rem'
          placeholder='Busque por DNI, Cliente, Analista o Cobrador'
          register={{ ...register('search') }}
        />

        <FragmentContainer col={rwd.buttons} justifyContent={`${centinela <= 1024 ? 'center' : 'start'}`}>
          <Button event={handleSubmit(onSearch)} width='8rem' className='primary' content='Buscar' />
          <Button type='submit' width='8rem' className='dark' content='Filtrar' />

          {
            centinela > 1024 &&
            <>
              <Button event={onReset} width='8rem' className='warning' content='Reiniciar' />
              <PDFDownloadLink
                document={
                  <MyDocument
                    adaptedCredits={adaptedCredits}
                    thead={thead}
                    dataFilter={dataFilter}
                    analistas={analistas}
                    cobradores={cobradores}
                  />
                }
                fileName="Reporte_creditos.pdf"
              >
                <Button width='5rem' className='print-pdf' content={<i className="fa-solid fa-file-pdf icon"></i>} />
              </PDFDownloadLink>
              <Button width='5rem' className='print-xlsx' content={<i className="fa-solid fa-file-excel icon"></i>} />
              <Button width='5rem' className='secondary' content={<i className="fa-solid fa-image icon"></i>} />
            </>
          }

          {centinela <= 1024 && <Button width='4rem' className='info' content={<i className="fa-solid fa-filter icon"></i>} />}
        </FragmentContainer>
      </InputsRow>

    </form>
  )
}
