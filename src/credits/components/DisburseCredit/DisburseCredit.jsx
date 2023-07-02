import { InputSelect } from "../../shared/InputSelect/InputSelect"
import { InputsRow } from "../../shared/InputsRow/InputsRow"
import { ModalWarningContainer } from "../../shared/ModalWarningContainer/ModalWarningContainer"

export const DisburseCredit = () => {
    return (
        <ModalWarningContainer>
            <p><b>Richard Reyes Arocutipa Lope Richard</b>, el crédito que selecciono es el <b>N°155</b> del cliente <b>Eduardo Alexander Torres Cabrera Manrique</b>, el cual posee un monto aprobado por <b>S/ 25,300.00</b> por un periodo de <b>36 meses</b>.
            </p>
            <InputsRow margin="1.3" justifyContent='center'>
                <InputSelect col={16} label='Selecciona una CAJA' name='disburse-caja' />
            </InputsRow>
            <p><b>¿Desea usted desembolsar este crédito?</b></p>
        </ModalWarningContainer>
    )
}
