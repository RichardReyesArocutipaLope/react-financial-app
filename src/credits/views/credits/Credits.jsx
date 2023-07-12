import { useContext } from 'react'
import { useSelector } from 'react-redux';
import { ModalContext } from '../../../context/modalContext';
import { CreditContext } from '../../context';
import { DocumentExportOptions, Filter, ModuleOption, ModuleOptions, ModuleTitle, Pagination, Table } from '../../../ui/components';
import {
  ApproveCredit, ClientFile, CreateCredit, CreditSchedule, DeleteCredit, DisburseCredit, EditCredit,
  ExportCreditData, OptionsApproveCredit, OptionsCreateCredit, OptionsDeleteCredit, OptionsDisburseCredit,
  OptionsEditCredit, OptionsExportCreditData, OptionsSimulateCredit, SimulateCredit
} from '../../components';

export const Credits = () => {

  const { handleModal } = useContext(ModalContext);
  const { isLoading, credits, numberOfCredits } = useSelector(state => state.credits);
  const { currentPage, setCurrentPage, parameters } = useContext(CreditContext);

  return (
    <>
      <ModuleTitle text='Créditos' />
      <ModuleOptions
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
        credits={credits}
      />
      <Table
        isLoading={isLoading}
        arrayData={credits}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.round(numberOfCredits / parameters.limit)}
        totalRegisters={numberOfCredits}
      />
    </>
  )
}
