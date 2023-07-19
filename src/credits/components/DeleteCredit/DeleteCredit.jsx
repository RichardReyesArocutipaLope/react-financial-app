import { useDispatch, useSelector } from "react-redux";
import { ModalWarningContainer } from "../../../ui/components"
import { useContext, useEffect } from "react";
import { AlertContext } from "../../../context/alertContext/AlertContext";
import { setActivateAlert } from "../../../store/credits/creditsSlice";
import { startDeleteCredit, startGetCredit } from "../../../store/credits/thunks";
import { setSubmitCreditCreateForm } from "../../../store/credits/creditsOptionsSlice";

export const DeleteCredit = ({setIsOpenModal}) => {

    const { activateAlert, message, selectedCredit, creditRawSelected } = useSelector(state => state.credits);
    const { setIsActiveAlert, setDataAlert } = useContext(AlertContext);
    const { submitCreditCreateForm } = useSelector(state => state.creditsOptions);
    const { fullName } = useSelector(state => state.auth);

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
        <ModalWarningContainer>
            <p><b>Richard Reyes Arocutipa Lope {`(${fullName})`}</b>, el crédito que selecciono es del cliente <b>{creditRawSelected?.fk_customer.first_name+ ' '+ creditRawSelected?.fk_customer.last_name}</b>, el cual posee un monto solicitado por <b>S/ {creditRawSelected?.requested_money}</b> por un periodo de <b>{creditRawSelected?.period} {creditRawSelected?.fk_period_type.name}</b>.
            </p>

            <p><b>¿Desea usted eliminar este credito?</b></p>
        </ModalWarningContainer>
    )
}
