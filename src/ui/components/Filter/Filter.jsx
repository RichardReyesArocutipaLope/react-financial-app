import { useForm } from 'react-hook-form';
import { useResponsiveForm } from '../../../hooks';
import { Button } from '../button';
import { FragmentContainer } from '../fragmentContainer';
import { InputDateRange } from '../inputDateRange';
import { InputMoneyRange } from '../inputMoneyRange';
import { InputSearch } from '../inputSearch';
import { InputSelect } from '../inputSelect';
import { InputsRow } from '../inputsRow';
import { MyDocument } from '../../../credits/views/credits/MyDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useContext } from 'react';
import { CreditContext } from '../../../credits/context';
import { useSelector } from 'react-redux';
import './Filter.css'

import Excel from 'exceljs';
import { saveAs } from 'file-saver';

const columns = [
  { header: 'Nombres', key: 'nombres' },
  { header: 'DNI', key: 'dni' },
  { header: 'Préstamo', key: 'prestamo' },
  { header: 'Estado', key: 'estado' },
  { header: 'Plazo', key: 'plazo' },
  { header: 'TasaInc', key: 'tasainc' },
  { header: 'Analista', key: 'analista' },
  { header: 'Cobrador', key: 'cobrador' },
];

const workSheetName = 'Worksheet-1';

export const Filter = ({ credits }) => {

  const initialResponsive = [
    { name: 'filter', xxs: 24, s: 12, m: 12, l: 8, xl: 6, xxl: 6, col: 6 },
    { name: 'search', xxs: 24, s: 24, m: 12, l: 8, xl: 6, xxl: 6, col: 6 },
    { name: 'buttons', xxs: 24, s: 24, m: 24, l: 24, xl: 12, xxl: 12, col: 6 },
  ]

  const { rwd, centinela } = useResponsiveForm(initialResponsive);
  const { register, handleSubmit, reset } = useForm()
  const { analistas, cobradores } = useSelector(state => state.roles);
  const { tablethead, dataForFilter, setDataForFilter } = useContext(CreditContext);

  const onSearch = (data) => {
    setDataForFilter({
      searchValue: data.search,
      state: null,
      dateRangeFirst: null,
      dateRangeLast: null,
      moneyRangeFirst: null,
      moneyRangeLast: null,
      idAnalista: null,
      idCobrador: null,
    })
  }

  const onSubmit = (data) => {
    setDataForFilter({
      searchValue: data.search,
      state: data.state || null,
      dateRangeFirst: data.range_date_from || null,
      dateRangeLast: data.range_date_to || null,
      moneyRangeFirst: +data.range_loan_from || null,
      moneyRangeLast: +data.range_loan_to || null,
      idAnalista: +data.id_analista || null,
      idCobrador: +data.id_cobrador || null,
    })
  }

  const onReset = () => {
    reset()
    setDataForFilter({
      searchValue: '',
      state: null,
      dateRangeFirst: null,
      dateRangeLast: null,
      moneyRangeFirst: null,
      moneyRangeLast: null,
      idAnalista: null,
      idCobrador: null,
    })
  }

  const iconPdf = <i className="fa-solid fa-file-pdf icon"></i>;
  const iconXlsx = <i className="fa-solid fa-file-excel icon"></i>;
  const iconFilter = <i className="fa-solid fa-filter icon"></i>;
  const documentoPdf = <MyDocument credits={credits} thead={tablethead} dataForFilter={dataForFilter} analistas={analistas} cobradores={cobradores} />

  const workbook = new Excel.Workbook();

  const saveExcel = async () => {

    const data = []
    credits.forEach(credit => {
      const item = {}
      credit.data.forEach((element, index) => { item[columns[index].key] = element })
      data.push(item)
    })

    try {
      const worksheet = workbook.addWorksheet(workSheetName);
      worksheet.columns = columns;
      worksheet.getRow(1).font = { bold: true };

      worksheet.columns.forEach(column => {
        if (['nombres', 'analista', 'cobrador'].includes(column.key)) {
          column.width = column.header.length + 25;
        } else {
          column.width = column.header.length + 10;
          column.alignment = { horizontal: 'center' };
        }
      });

      data.forEach(singleData => { worksheet.addRow(singleData) });

      let styleCell = { style: 'thin' }
      worksheet.eachRow({ includeEmpty: false }, row => {
        const currentCell = row._cells;
        currentCell.forEach(singleCell => {
          const cellAddress = singleCell._address;
          worksheet.getCell(cellAddress).border = { top: styleCell, left: styleCell, bottom: styleCell, right: styleCell };
        });
      });

      const buf = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([buf]), `Reporte_creditos.xlsx`);

    } catch (error) {
      console.error(error);

    } finally {
      workbook.removeWorksheet(workSheetName);
    }
  };

  return (
    <form className='main-filter' onSubmit={handleSubmit(onSubmit)}>
      <InputsRow margin='.5' gap='1.3rem 0rem'>
        {
          (centinela > 1024) &&
          <>
            <InputDateRange col={rwd.filter} label='Rango Date'
              registerFrom={{ ...register('range_date_from') }} registerTo={{ ...register('range_date_to') }} />

            <InputMoneyRange col={rwd.filter} label='Rango Saldo'
              registerFrom={{ ...register('range_loan_from') }} registerTo={{ ...register('range_loan_to') }} />

            <InputSelect col={rwd.filter} label='Estado' id='estado' register={{ ...register('state') }}>
              <option value="RE">Renovado</option>
              <option value="NU">Nuevo</option>
              <option value="AP">Aprobado</option>
              <option value="DE">Desembolsado</option>
            </InputSelect>

            <InputSelect col={rwd.filter} label='Analista' id='analista' register={{ ...register('id_analista') }}>
              {analistas?.map(({ id, fullname }) => (<option value={id}>{fullname}</option>))}
            </InputSelect>

            <InputSelect col={rwd.filter} label='Cobrador' id='cobrador' register={{ ...register('id_cobrador') }}>
              {cobradores?.map(({ id, fullname }) => <option value={id}>{fullname}</option>)}
            </InputSelect>
          </>
        }

        <InputSearch col={rwd.search} width='30rem'
          placeholder='Busque por DNI o nombre de cliente'
          register={{ ...register('search') }} />

        <FragmentContainer col={rwd.buttons} justifyContent={`${centinela <= 1024 ? 'center' : 'start'}`}>
          <Button event={handleSubmit(onSearch)} width='8rem' className='primary' content='Buscar' />
          <Button type='submit' width='8rem' className='dark' content='Filtrar' />
          {
            (centinela > 1024) &&
            <>
              <Button event={onReset} width='8rem' className='warning' content='Reiniciar' />
              <PDFDownloadLink document={documentoPdf} fileName="Reporte_creditos.pdf">
                <Button width='5rem' className='print-pdf' content={iconPdf} />
              </PDFDownloadLink>
              <Button width='5rem' className='print-xlsx' content={iconXlsx} event={saveExcel} />
            </>
          }
          {(centinela <= 1024) && <Button width='4rem' className='info' content={iconFilter} />}
        </FragmentContainer>
      </InputsRow>
    </form>
  )
}
