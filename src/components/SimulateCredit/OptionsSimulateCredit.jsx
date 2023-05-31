import { Button } from "../../shared/Button/Button"
import { FragmentContainer } from "../../shared/FragmentContainer/FragmentContainer"

export const OptionsSimulateCredit = ({ setIsOpenModal }) => {

    const handleModal = () => {
        setIsOpenModal(false)
    }

    return (
        <FragmentContainer justifyContent='center' gap='.9rem'>
            <Button width='11rem' className='dark' content='Limpiar' />
            <Button width='11rem' className='info' content='Simular' />
            <Button width='11rem' className='danger' content='Cancelar' event={handleModal}/>
        </FragmentContainer>
    )
}
