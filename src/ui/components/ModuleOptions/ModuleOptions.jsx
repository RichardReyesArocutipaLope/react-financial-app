import { useContext, useState } from 'react'
import {
    ApproveCredit, ClientFile, CreateCredit, CreditSchedule, DeleteCredit, DisburseCredit, EditCredit,
    ExportCreditData, OptionsApproveCredit, OptionsCreateCredit, OptionsDeleteCredit, OptionsDisburseCredit,
    OptionsEditCredit, OptionsExportCreditData, OptionsSimulateCredit, SimulateCredit
} from '../../../credits/components';
import { DocumentExportOptions } from '../documentExportOptions';
import { ModuleOption } from '../moduleOption/ModuleOption';
import './ModuleOptions.css'
import { ModalContext } from '../../../context/modalContext';

export const ModuleOptions = () => {

    const [moreInfo, setMoreInfo] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const { handleModal } = useContext(ModalContext);

    const handleMoreInfo = () => {
        setMoreInfo(!moreInfo);
    }
    const handleNotifications = () => {
        setNotifications(!notifications);
    }

    return (
        <div className='module-options__container'>
            <div
                className={`module-options__info-wrapper left ${moreInfo ? 'extend' : ''}`}
                onDoubleClick={handleMoreInfo}
            >
                <p>CREDITOS INFO</p>
                <div className='module-options__info'>
                    <div className='module-options__info-row'>
                        <span>Nombres</span>
                        <span>Richard Reyes Arocutipa Lope</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>DNI</span>
                        <span>71283340</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Prestamo</span>
                        <span>S/. 56,000.00</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Estado</span>
                        <span>Aprobado</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Plazo</span>
                        <span>3 Años</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Cuota</span>
                        <span>S/. 450.80</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Saldo</span>
                        <span>S/. 35,340.00</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Tasa Inc</span>
                        <span>8.3443 %</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Analista</span>
                        <span>Victor Mireles Bernabe</span>
                    </div>
                    <div className='module-options__info-row'>
                        <span>Cobrador</span>
                        <span>Rolando Gutierrez Cutipa</span>
                    </div>
                </div>
            </div>
            <div className='module-options__main' >
                <div className='module-options'>
                    <div >
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
                    </div>
                </div>
            </div>
            <div
                className={`module-options__info-wrapper right ${notifications ? 'extend' : ''}`}
                onDoubleClick={handleNotifications}>
                <p>REGISTRO INFO</p>
                <div className='module-options__info'>
                    <div className='module-options__info-table-title'>
                        <span>TARIFARIO DE PAGOS SEMANALES</span>
                    </div>
                    <div className='module-options__info-table' >
                        <div className='table-container'>
                            <table className='table'>
                                <thead className='table__thead'>
                                    <tr>
                                        <th>Monto</th>
                                        <th>4</th>
                                        <th>8</th>
                                        <th>12</th>
                                    </tr>
                                </thead>
                                <tbody className='table__tbody'>
                                    <tr>
                                        <td>S/. 1,000.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 1,500.00</td>
                                        <td>S/. 413.00</td>
                                        <td>S/. 225.00</td>
                                        <td>S/. 163.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 2,000.00</td>
                                        <td>S/. 550.00</td>
                                        <td>S/. 300.00</td>
                                        <td>S/. 217.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 2,500.00</td>
                                        <td>S/. 688.00</td>
                                        <td>S/. 375.00</td>
                                        <td>S/. 271.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 3,000.00</td>
                                        <td>S/. 825.00</td>
                                        <td>S/. 450.00</td>
                                        <td>S/. 325.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 3,500.00</td>
                                        <td>S/. 963.00</td>
                                        <td>S/. 525.00</td>
                                        <td>S/. 379.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 4,000.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 4,500.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 5,000.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 5,500.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 6,000.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 6,500.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 7,000.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                    <tr>
                                        <td>S/. 7,500.00</td>
                                        <td>S/. 275.00</td>
                                        <td>S/. 150.00</td>
                                        <td>S/. 108.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
