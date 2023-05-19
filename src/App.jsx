import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Dashboard } from "./views/Dashboard/Dashboard"
import { Cajas } from "./views/Cajas/Cajas"
import { Operaciones } from "./views/Operaciones/Operaciones"
import { Consultas } from "./views/Consultas/Consultas"
import { Schedules } from "./views/Schedules/Schedules"
import { Cobros } from "./views/Cobros/Cobros"
import { Supervisor } from "./views/Supervisor/Supervisor"
import { Historial } from "./views/Historial/Historial"
import { PagarCuotas } from "./views/PagarCuotas/PagarCuotas"
import { Usuarios } from "./views/Usuarios/Usuarios"
import { Permisos } from "./views/Permisos/Permisos"
import { Reportes } from "./views/Reportes/Reportes"
import { Agencias } from "./views/Agencias/Agencias"
import { Parametros } from "./views/Parametros/Parametros"
import { CerrarCajas } from "./views/CerrarCajas/CerrarCajas"
import { Transferir } from "./views/Transferir/Transferir"
import { Aperturar } from "./views/Aperturar/Aperturar"
import { Empleados } from "./views/Empleados/Empleados"
import { Clientes } from "./views/Clientes/Clientes"
import { Declines } from "./views/Declines/Declines"
import { Payouts } from "./views/Payouts/Payouts"
import { ModuleContainer } from "./shared/ModuleContainer/ModuleContainer"
import { Modal } from "./shared/Modal/Modal"
import { useState } from "react"

export const App = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalBodyContent, setModalBodyContent] = useState(<></>)
    const [modalFooterContent, setModalFooterContent] = useState(<></>)
    const [modalProperties, setModalProperties] = useState({
        width: 'modal-l',
        heightBody: '40rem',
        staticBackdrop: false,
        scroll: false,
        verticallyCentered: false,
        title:'MODAL',
        bodyBackgroundColor:'var(--bg-two-color-white)',
    })


    const handleModal = (typeOfOperation = '', bodyComponent = <></>, footerComponet = <></>, modalProperties = {}) => {
        if (typeOfOperation === 'setData') {
            setModalBodyContent(bodyComponent)
            setModalFooterContent(footerComponet)
            modalProperties && setModalProperties(modalProperties)
            setIsOpenModal(!isOpenModal);
            return;
        }
        setIsOpenModal(!isOpenModal);
    }
    return (
        <>
            <Sidebar />
            <div className="content-app">
                <Header />

                <ModuleContainer>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/cajas" element={<Cajas />} />
                        <Route path="/operaciones" element={<Operaciones />} />
                        <Route path="/consultas" element={<Consultas />} />
                        <Route path="/schedules" element={<Schedules handleModal={handleModal} />} />
                        <Route path="/cobros" element={<Cobros />} />
                        <Route path="/supervisor" element={<Supervisor />} />
                        <Route path="/historial" element={<Historial />} />
                        <Route path="/pagar-cuotas" element={<PagarCuotas />} />
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route path="/permisos" element={<Permisos />} />
                        <Route path="/reportes" element={<Reportes />} />
                        <Route path="/agencias" element={<Agencias />} />
                        <Route path="/parametros-sis" element={<Parametros />} />
                        <Route path="/cerrar-caja" element={<CerrarCajas />} />
                        <Route path="/transferir" element={<Transferir />} />
                        <Route path="/aperturar" element={<Aperturar />} />
                        <Route path="/empleados" element={<Empleados />} />
                        <Route path="/clientes" element={<Clientes />} />
                        <Route path="/declines" element={<Declines />} />
                        <Route path="/payouts" element={<Payouts />} />
                        <Route path="/" element={<Main />} />
                        <Route path="/*" element={<Navigate to='/' />} />
                    </Routes>
                </ModuleContainer>
            </div>
            <Modal
                isOpenModal={isOpenModal}
                handleModal={handleModal}
                modalBodyContent={modalBodyContent}
                modalFooterContent={modalFooterContent}
                modalProperties={modalProperties}
            />
        </>
    )
}
