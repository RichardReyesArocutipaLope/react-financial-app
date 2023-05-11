import { useEffect, useRef, useState } from 'react'
import { ModuleOption } from '../ModuleOption/ModuleOption'
import './ModuleOptions.css'

export const ModuleOptions = () => {

    const [moreInfo, setMoreInfo] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [widthModuleOptions, setwidthModuleOptions] = useState('')

    const moduleOptions = useRef();

    const handleMoreInfo = () => {
        setMoreInfo(!moreInfo);
        let ancho = (moduleOptions.current.offsetWidth) / 16
        moreInfo ? (ancho = ancho + 26) : (ancho = ancho - 26)
        setwidthModuleOptions(ancho + 'rem')
    }

    const handleNotifications = () => {
        setNotifications(!notifications);
        let ancho = (moduleOptions.current.offsetWidth) / 16
        console.log(ancho)
        notifications ? (ancho = ancho + 26) : (ancho = ancho - 26)
        setwidthModuleOptions(ancho + 'rem')
        console.log(notifications)
    }

    useEffect(() => {
        console.log(moduleOptions.current.offsetWidth)
        let ancho = (moduleOptions.current.offsetWidth) / 16
        setwidthModuleOptions(ancho + 'rem')
    }, [])



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
            <div className='module-options' ref={moduleOptions}>
                <div style={{ height: `${widthModuleOptions}` }}>
                    <ModuleOption
                        icon={<i class="fa-solid fa-file-circle-plus"></i>}
                        text='Crear'
                        color='celeste' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-file-pen"></i>}
                        text='Editar'
                        color='ambar' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-trash"></i>}
                        text='Eliminar'
                        color='rojo' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-thumbs-up"></i>}
                        text='Aprobar'
                        color='azul' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-sack-dollar"></i>}
                        text='Desembolsar'
                        color='verde' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-calendar-days"></i>}
                        text='Cronograma'
                        color='turqueza' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-file-lines"></i>}
                        text='Ficha'
                        color='gris' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-bolt"></i>}
                        text='Simular'
                        color='turquesa' />
                    <ModuleOption
                        icon={<i class="fa-solid fa-file-export"></i>}
                        text='Exportar'
                        color='morado' />
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
