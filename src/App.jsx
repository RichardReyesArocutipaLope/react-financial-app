import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Dashboard } from "./views/Dashboard/Dashboard"
import { Caja } from "./views/Caja/Caja"
import { Operaciones } from "./views/Operaciones/Operaciones"
import { Creditos} from "./views/Creditos/Creditos"
import { Historial } from "./views/Historial/Historial"
import { PagarCuotas } from "./views/PagarCuotas/PagarCuotas"
import { Usuarios } from "./views/Usuarios/Usuarios"
import { Permisos } from "./views/Permisos/Permisos"
import { Reportes } from "./views/Reportes/Reportes"
import { Agencias } from "./views/Agencias/Agencias"
import { Parametros } from "./views/Parametros/Parametros"
import { Empleados } from "./views/Empleados/Empleados"
import { Clientes } from "./views/Clientes/Clientes"
import { Feriados } from "./views/Feriados/Feriados"
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
        title: 'MODAL',
        bodyBackgroundColor: 'var(--bg-two-color-white)',
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
                        {/* POR EL MOMENTO */}
                        {/* MODULO PARA DESARROLLADORES */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* MODULO CATALOGO */}
                        <Route path="/agencias" element={<Agencias />} />
                        <Route path="/empleados" element={<Empleados />} />
                        <Route path="/clientes" element={<Clientes />} />
                        <Route path="/feriados" element={<Feriados />} />

                        {/* MODULO CREDITO */}
                        <Route path="/creditos" element={<Creditos handleModal={handleModal} />} />

                        {/* MODULO CAJA */}
                        <Route path="/cajas" element={<Caja />} />
                        <Route path="/operaciones" element={<Operaciones />} />

                        {/* MODULO REPORTES */}
                        <Route path="/reportes" element={<Reportes />} />

                        {/* MODULO SEGURIDAD */}
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route path="/permisos" element={<Permisos />} />
                        <Route path="/parametros-sis" element={<Parametros />} />

                        {/* MODULO COBRANZAS */}
                        <Route path="/pagar-cuotas" element={<PagarCuotas />} />
                        <Route path="/historial" element={<Historial />} />

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
