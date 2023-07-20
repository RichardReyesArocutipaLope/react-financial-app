import { useContext, useEffect } from "react";
import { AlertContext } from "../../../context/alertContext/AlertContext";
import { setActivateAlert } from "../../../store/credits/creditsSlice";
import { startDeleteCredit, startGetCredit } from "../../../store/credits/thunks";
import { setSubmitCreditCreateForm } from "../../../store/credits/creditsOptionsSlice";
import { DocumentTemplate, InputForDocument, RowForDocument } from '../../../ui/components'
import { useDispatch, useSelector } from "react-redux";
import './ClientFile.css'

export const ClientFile = () => {
    const { activateAlert, message, selectedCredit, creditRawSelected } = useSelector(state => state.credits);
    const { setIsActiveAlert, setDataAlert } = useContext(AlertContext);
    const { submitCreditCreateForm } = useSelector(state => state.creditsOptions);
    const dispatch = useDispatch();

    useEffect(() => {
        if (submitCreditCreateForm) {
            dispatch(startDeleteCredit(creditRawSelected?.id))
            dispatch(setSubmitCreditCreateForm(false))
        }
    }, [submitCreditCreateForm])

    useEffect(() => {
        if (activateAlert.isActive) {
            setIsActiveAlert(true)
            setDataAlert({
                type: activateAlert.type,
                errorCode: message.statusCode,
                message: message.message
            })
            setTimeout(() => {
                dispatch(setActivateAlert({ isActive: false, type: '' }))
                setIsActiveAlert(false)
            }, 3000);
            if (activateAlert.type == 'success') setIsOpenModal(false)
        }

    }, [activateAlert.isActive])

    useEffect(() => {
        dispatch(startGetCredit(selectedCredit.id))
    }, [])

    return (
        <DocumentTemplate>
            <h2 className="client-file__subtitle">Datos del cliente</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres'
                    content={creditRawSelected?.fk_customer.first_name + ' ' + creditRawSelected?.fk_customer.last_name} />
                <InputForDocument col={9} label='Direccion'
                    content={creditRawSelected?.fk_customer.address} />
                <InputForDocument col={6} label='DNI' content={creditRawSelected?.fk_customer.dni} />
            </RowForDocument>
            <RowForDocument margin='1.2'>
                <InputForDocument col={7} label='Celular 1' content={creditRawSelected?.fk_customer?.phone} />
                <InputForDocument col={7} label='Celular 2' content={creditRawSelected?.fk_customer?.phone2 || 'No especificado'} />
                <InputForDocument col={10} label='Correo' content={creditRawSelected?.fk_customer?.email} />
            </RowForDocument>

            <h2 className="client-file__subtitle">Datos del negocio</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={12} label='Direccion de negocio' content={creditRawSelected?.fk_customer?.business.address} />
                <InputForDocument col={12} label='Referencia de negocio'
                    content={creditRawSelected?.fk_customer?.business?.address_reference || 'No especificado'} />
            </RowForDocument>
            <RowForDocument margin='1.2'>
                <InputForDocument col={24} label='Actividad de negocio'
                    content={creditRawSelected?.fk_customer?.business?.business_description} />
            </RowForDocument>

            <h2 className="client-file__subtitle">Referencias personales</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres'
                    content={`${creditRawSelected?.personalReference[0]?.first_name} ${creditRawSelected?.personalReference[0]?.last_name || 'No especificado'}`} />
                <InputForDocument col={5} label='DNI'
                    content={creditRawSelected?.personalReference[0]?.dni || 'No especificado'} />
                <InputForDocument col={5} label='Celular'
                    content={creditRawSelected?.personalReference[0]?.phone || 'No especificado'} />
                <InputForDocument col={5} label='parentesco'
                    content={creditRawSelected?.personalReference[0]?.relationship || 'No especificado'} />
            </RowForDocument>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres'
                    content={`${creditRawSelected?.personalReference[1]?.first_name} ${creditRawSelected?.personalReference[1]?.last_name || 'No especificado'}`} />
                <InputForDocument col={5} label='DNI'
                    content={creditRawSelected?.personalReference[1]?.dni || 'No especificado'} />
                <InputForDocument col={5} label='Celular'
                    content={creditRawSelected?.personalReference[1]?.phone || 'No especificado'} />
                <InputForDocument col={5} label='parentesco'
                    content={creditRawSelected?.personalReference[1]?.relationship || 'No especificado'} />
            </RowForDocument>

            <h2 className="client-file__subtitle">Datos de aval</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres'
                    content={`${creditRawSelected?.aval[0]?.first_name} ${creditRawSelected?.aval[0]?.last_name || 'No especificado'}`} />
                <InputForDocument col={5} label='DNI'
                    content={creditRawSelected?.aval[0]?.dni || 'No especificado'} />
                <InputForDocument col={5} label='Celular'
                    content={creditRawSelected?.aval[0]?.phone || 'No especificado'} />
                <InputForDocument col={5} label='Correo'
                    content={creditRawSelected?.aval[0]?.email || 'No especificado'} />
            </RowForDocument>

            <h2 className="client-file__subtitle">Datos de préstamo</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={8} label='Monto aprobado' content={creditRawSelected?.requested_money} />
                <InputForDocument col={8} label='Plazo del crédito'
                    content={`${creditRawSelected?.period} ${creditRawSelected?.fk_period_type.name}`} />
                <InputForDocument col={8} label='Cuota a pagar' content='NaN' />
            </RowForDocument>


        </DocumentTemplate>
    )
}
