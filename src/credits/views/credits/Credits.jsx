import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ModalContext } from '../../../context/modalContext';
import { Button, DocumentExportOptions, Filter, ModuleOption, ModuleOptions, ModuleTitle, Pagination, Table } from '../../../ui/components';
import {
  ApproveCredit, ClientFile, CreateCredit, CreditSchedule, DeleteCredit, DisburseCredit, EditCredit,
  ExportCreditData, OptionsApproveCredit, OptionsCreateCredit, OptionsDeleteCredit, OptionsDisburseCredit,
  OptionsEditCredit, OptionsExportCreditData, OptionsSimulateCredit, SimulateCredit
} from '../../components';
import { startLoadingCredits } from '../../../store/credits/thunks';
import { startLoadingRoleByName } from '../../../store/security/roles';

const thead = [
  'Nombres',
  'DNI',
  'Préstamo',
  'Estado',
  'Plazo',
  'Tasa Inc',
  'Analista',
  'Cobrador',
]

const dataInfoRight = {
  infoHead: ['Monto', '4', '8', '12'],
  infoBody: [
    ["S/. 1,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 1,500.00", "S/. 413.00", "S/. 225.00", "S/. 163.00",],
    ["S/. 2,000.00", "S/. 550.00", "S/. 300.00", "S/. 217.00",],
    ["S/. 2,500.00", "S/. 688.00", "S/. 375.00", "S/. 271.00",],
    ["S/. 3,000.00", "S/. 825.00", "S/. 450.00", "S/. 325.00",],
    ["S/. 3,500.00", "S/. 963.00", "S/. 525.00", "S/. 379.00",],
    ["S/. 4,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 4,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 5,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 5,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 6,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 6,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 7,000.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
    ["S/. 7,500.00", "S/. 275.00", "S/. 150.00", "S/. 108.00",],
  ],
}


export const Credits = () => {

  const dispatch = useDispatch();
  const { handleModal } = useContext(ModalContext);
  const { isLoading, credits, numberOfCredits } = useSelector(state => state.credits);
  const { analistas, cobradores } = useSelector(state => state.roles);

  const adaptedCredits = []
  credits?.forEach(credit => {
    let newEstado
    switch (credit.estado) {
      case 'NU': newEstado = 'Nuevo'; break;
      case 'RE': newEstado = 'Renovado'; break;
      case 'AP': newEstado = 'Aprobado'; break;
      case 'DE': newEstado = 'Desembolsado'; break;
      case 'RC': newEstado = 'Rechazado'; break;
    }
    adaptedCredits.push({
      id: credit.id_credit,
      data: [
        credit.cliente,
        credit.dni,
        credit.prestamo,
        newEstado,
        credit.plazo,
        credit.credit_interest_rate,
        credit.analista,
        credit.cobrador,
      ]
    })
  });

  const [currentPage, setCurrentPage] = useState(0);
  const infoTable = {
    currentPage,
    setCurrentPage,
  }

  const [dataFilter, setdataForFilter] = useState({
    searchValue: '',
    state: null,
    dateRangeFirst: null,
    dateRangeLast: null,
    moneyRangeFirst: null,
    moneyRangeLast: null,
    idAnalista: null,
    idCobrador: null,
  })

  const [parameters, setParameters] = useState({ limit: 10, offset: 0 })

  useEffect(() => {
    setParameters({ limit: 10, offset: currentPage })
  }, [currentPage])

  useEffect(() => {
    dispatch(startLoadingCredits(dataFilter, parameters))
  }, [parameters, dataFilter])

  useEffect(() => {
    dispatch(startLoadingRoleByName('analista'))
    dispatch(startLoadingRoleByName('cobrador'))
  }, [])

  const [creditSelect, setCreditSelect] = useState()

  // const viewerStyle = {
  //   display: "block",
  //   position: "absolute",
  //   width: "80vw",
  //   height: "90vh"
  // };
  
  return (
    <>
      <ModuleTitle text='Créditos' />
      <ModuleOptions
        creditSelect={creditSelect}
        dataInfoRight={dataInfoRight}
        titleInfoLeft="CREDITOS INFO"
        titleInfoRight="REGISTRO INFO"
      >
        <ModuleOption
          icon={<i className="fa-solid fa-file-circle-plus"></i>}
          text='Crear'
          color='celeste'
          handleModal={handleModal}
          bodyComponent={<CreateCredit />}
          footerComponent={<OptionsCreateCredit />}
          modalProperties={{
            width: 'modal-l',
            heightBody: '50rem',
            bodyHeightClass: 'modal__body--responsive',
            staticBackdrop: false,
            scroll: false,
            verticallyCentered: false,
            title: 'CREAR CRÉDITO',
            bodyBackgroundColor: '',
            footerHeightClass: 'modal__footer--responsive',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-file-pen"></i>}
          text='Editar'
          color='ambar'
          handleModal={handleModal}
          bodyComponent={<EditCredit />}
          footerComponent={<OptionsEditCredit />}
          modalProperties={{
            width: 'modal-l',
            heightBody: '50rem',
            bodyHeightClass: 'modal__body--responsive',
            staticBackdrop: false,
            scroll: false,
            verticallyCentered: false,
            title: 'EDITAR CRÉDITO',
            bodyBackgroundColor: 'var(--bg-two-color-white)',
            footerHeightClass: 'modal__footer--responsive',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-trash"></i>}
          text='Eliminar'
          color='rojo'
          handleModal={handleModal}
          bodyComponent={<DeleteCredit />}
          footerComponent={<OptionsDeleteCredit />}
          modalProperties={{
            width: 'modal-s',
            heightBody: 'max-content',
            bodyHeightClass: '',
            staticBackdrop: false,
            scroll: false,
            verticallyCentered: true,
            title: 'ELIMINAR CRÉDITO',
            bodyBackgroundColor: 'var(--bg-two-color-white)',
            footerHeightClass: '',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-thumbs-up"></i>}
          text='Aprobar'
          color='azul'
          handleModal={handleModal}
          bodyComponent={<ApproveCredit />}
          footerComponent={<OptionsApproveCredit />}
          modalProperties={{
            width: 'modal-s',
            heightBody: 'max-content',
            bodyHeightClass: '',
            staticBackdrop: false,
            scroll: false,
            verticallyCentered: true,
            title: 'APROBAR CRÉDITO',
            bodyBackgroundColor: 'var(--bg-two-color-white)',
            footerHeightClass: '',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-sack-dollar"></i>}
          text='Desembolsar'
          color='verde'
          handleModal={handleModal}
          bodyComponent={<DisburseCredit />}
          footerComponent={<OptionsDisburseCredit />}
          modalProperties={{
            width: 'modal-s',
            heightBody: 'max-content',
            bodyHeightClass: '',
            staticBackdrop: false,
            scroll: false,
            verticallyCentered: true,
            title: 'DESEMBOLSAR CRÉDITO',
            bodyBackgroundColor: 'var(--bg-two-color-white)',
            footerHeightClass: '',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-calendar-days"></i>}
          text='Cronograma'
          color='turqueza'
          handleModal={handleModal}
          bodyComponent={<CreditSchedule />}
          footerComponent={<DocumentExportOptions />}
          modalProperties={{
            width: 'modal-l',
            heightBody: '100%',
            bodyHeightClass: 'modal__body--responsive',
            staticBackdrop: false,
            scroll: true,
            verticallyCentered: false,
            title: 'CRONOGRAMA',
            bodyBackgroundColor: 'var(--bg-four-color-white)',
            footerHeightClass: 'modal__footer--responsive',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-file-lines"></i>}
          text='Ficha'
          color='gris'
          handleModal={handleModal}
          bodyComponent={<ClientFile />}
          footerComponent={<DocumentExportOptions />}
          modalProperties={{
            width: 'modal-l',
            heightBody: '100%',
            bodyHeightClass: 'modal__body--responsive',
            staticBackdrop: false,
            scroll: true,
            verticallyCentered: false,
            title: 'FICHA DEL CLIENTE',
            bodyBackgroundColor: 'var(--bg-four-color-white)',
            footerHeightClass: 'modal__footer--responsive',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-bolt"></i>}
          text='Simular'
          color='turquesa'
          handleModal={handleModal}
          bodyComponent={<SimulateCredit />}
          footerComponent={<OptionsSimulateCredit />}
          modalProperties={{
            width: 'modal-l',
            heightBody: '100%',
            bodyHeightClass: 'modal__body--responsive',
            staticBackdrop: false,
            scroll: true,
            verticallyCentered: false,
            title: 'SIMULAR CRÉDITO',
            bodyBackgroundColor: 'var(--bg-four-color-white)',
            footerHeightClass: 'modal__footer--responsive',
          }}
        />
        <ModuleOption
          icon={<i className="fa-solid fa-file-export"></i>}
          text='Exportar'
          color='morado'
          handleModal={handleModal}
          bodyComponent={<ExportCreditData />}
          footerComponent={<OptionsExportCreditData />}
          modalProperties={{
            width: 'modal-m',
            heightBody: 'max-content',
            bodyHeightClass: '',
            staticBackdrop: false,
            scroll: false,
            verticallyCentered: true,
            title: 'EXPORTAR CRÉDITO',
            bodyBackgroundColor: 'var(--bg-two-color-white)',
            footerHeightClass: '',
          }}
        />
      </ModuleOptions>
      <Filter
        setdataForFilter={setdataForFilter}
        analistas={analistas}
        cobradores={cobradores}

        adaptedCredits={adaptedCredits}
        thead={thead}
        dataFilter={dataFilter}
      />
      <Table
        isLoading={isLoading}
        arrayData={adaptedCredits}
        thead={thead}
        setCreditSelect={setCreditSelect}

      />
      <Pagination
        infoTable={infoTable}
        totalPages={Math.round(numberOfCredits / parameters.limit)}
        totalRegisters={numberOfCredits}
      />

      {/* <PDFViewer style={viewerStyle}>
        <MyDocument
          adaptedCredits={adaptedCredits}
          thead={thead}
          dataFilter={dataFilter}
          analistas={analistas}
          cobradores={cobradores}

        />
      </PDFViewer> */}
    </>
  )
}
