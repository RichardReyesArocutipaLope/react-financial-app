import { InputSelect, InputsRow, ModalWarningContainer } from "../../../ui/components"
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertContext } from "../../../context/alertContext/AlertContext";
import { setActivateAlert } from "../../../store/credits/creditsSlice";
import { startDisburseCredit, startGetCredit } from "../../../store/credits/thunks";
import { setSubmitCreditCreateForm } from "../../../store/credits/creditsOptionsSlice";
export const DisburseCredit = ({setIsOpenModal}) => {

    const { activateAlert, message, selectedCredit, creditRawSelected } = useSelector(state => state.credits);
    const { setIsActiveAlert, setDataAlert } = useContext(AlertContext);
    const { submitCreditCreateForm } = useSelector(state => state.creditsOptions);
    const { fullName, role} = useSelector(state => state.auth);

    const dispatch = useDispatch();


    useEffect(() => {
        if (submitCreditCreateForm) {
            dispatch(startDisburseCredit(creditRawSelected?.id))
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
            <p><b>{fullName} {`(${role})`}</b>, el crédito que selecciono es del cliente <b>{creditRawSelected?.fk_customer.first_name+ ' '+ creditRawSelected?.fk_customer.last_name}</b>, el cual posee un monto aprobado por <b>S/ {creditRawSelected?.requested_money}</b> por un periodo de <b>{creditRawSelected?.period} {creditRawSelected?.fk_period_type.name}</b>.
            </p>
            <InputsRow margin="1.3" justifyContent='center'>
                <InputSelect col={16} label='Selecciona una CAJA' id='disburse-caja' >
                    <option value="c1">Caja 1</option>
                    <option value="c2">Caja 2</option>
                    <option value="c3">Caja 3</option>
                </InputSelect>
            </InputsRow>
            <p><b>¿Desea usted desembolsar este crédito?</b></p>
        </ModalWarningContainer>
    )
}
