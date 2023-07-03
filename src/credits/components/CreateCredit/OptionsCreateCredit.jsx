import { Button } from '../../shared/Button/Button'
import { DocumentExportOptions } from '../../shared/DocumentExportOptions/DocumentExportOptions'
import { FragmentContainer } from '../../shared/FragmentContainer/FragmentContainer'
import { CreditSchedule } from '../creditSchedule/CreditSchedule'

export const OptionsCreateCredit = ({ setIsOpenModal, openAnotherModal }) => {

    const handleModal = () => {
        setIsOpenModal(false)
    }

    const handleCronogramaModal = () => {
        let modalProperties = {
            width: 'modal-l',
            heightBody: '100%',
            bodyHeightClass: 'modal__body--responsive',
            staticBackdrop: false,
            scroll: true,
            verticallyCentered: false,
            title: 'CRONOGRAMA',
            bodyBackgroundColor: 'var(--bg-four-color-white)',
            footerHeightClass: 'modal__footer--responsive',
        }
        openAnotherModal(<CreditSchedule />, <DocumentExportOptions />, modalProperties)
    }

    return (
        <FragmentContainer justifyContent='center' gap='.5rem'>
            <Button width='10rem' className='dark' content='Limpiar' />
            <Button width='10rem' className='success' content='Guardar' />
            <Button width='10rem' className='danger' content='Cancelar' event={handleModal} />
            <Button width='10rem' className='info' content='Visualizar' />
            <Button width='10rem' className='gris' content='Cronograma' event={handleCronogramaModal} />
        </FragmentContainer>
    )
}
