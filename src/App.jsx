import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./auth/pages"
import { Dashboard } from "./dashboard/views"
import { Agencies, Customers, Employees, Holidays } from "./catalogue/views"
import { Credits } from "./credits/views"
import { CashAccount, Operations } from "./cash-account/views"
import { Reports } from "./reports/views"
import { Parameters, Permissions, Users } from "./security/views"
import { PayDues, PaymentHistory } from "./receivables/views"
import { Header, Modal, ModuleContainer, Sidebar } from "./ui/components"


export const App = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalBodyContent, setModalBodyContent] = useState(<></>)
    const [modalFooterContent, setModalFooterContent] = useState(<></>)
    const [modalProperties, setModalProperties] = useState({
        width: 'modal-l',
        heightBody: '40rem',
        bodyHeightClass: '',
        staticBackdrop: false,
        scroll: false,
        verticallyCentered: false,
        title: 'MODAL',
        bodyBackgroundColor: 'var(--bg-two-color-white)',
        footerHeightClass: '',
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

    const anotherModal = (anotherBodyComponent = <></>, anotherFooterComponet = <></>, anotherModalProperties = {}) => {
        setModalBodyContent(anotherBodyComponent)
        setModalFooterContent(anotherFooterComponet)
        modalProperties && setModalProperties(anotherModalProperties)
    }

    return false ?
        // (<MainLoading/>)
        // (<StormBackground/>)
        (<Login />)
        :
        (
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
                            <Route path="/agencias" element={<Agencies />} />
                            <Route path="/empleados" element={<Employees />} />
                            <Route path="/clientes" element={<Customers />} />
                            <Route path="/feriados" element={<Holidays />} />

                            {/* MODULO CREDITO */}
                            <Route path="/creditos" element={<Credits handleModal={handleModal} />} />

                            {/* MODULO CAJA */}
                            <Route path="/cajas" element={<CashAccount />} />
                            <Route path="/operaciones" element={<Operations />} />

                            {/* MODULO REPORTES */}
                            <Route path="/reportes" element={<Reports />} />

                            {/* MODULO SEGURIDAD */}
                            <Route path="/usuarios" element={<Users />} />
                            <Route path="/permisos" element={<Permissions />} />
                            <Route path="/parametros-sis" element={<Parameters />} />

                            {/* MODULO COBRANZAS */}
                            <Route path="/pagar-cuotas" element={<PayDues />} />
                            <Route path="/historial" element={<PaymentHistory/>} />

                            <Route path="/" element={<Navigate to="/creditos" />} />
                            <Route path="/*" element={<Navigate to='/creditos' />} />
                        </Routes>
                    </ModuleContainer>
                </div>
                <Modal
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    handleModal={handleModal}
                    modalBodyContent={modalBodyContent}
                    modalFooterContent={modalFooterContent}
                    modalProperties={modalProperties}
                    anotherModal={anotherModal}
                />
            </>
        )
}
