import { Button, FragmentContainer } from "../../../ui/components"

export const OptionsEditCredit = ({ setIsOpenModal }) => {

    const handleModal = () => { setIsOpenModal(false) }

    return (
        <FragmentContainer justifyContent='center' gap='.5rem'>
            <Button width='10rem' className='dark' content='Limpiar' />
            <Button width='10rem' className='success' content='Guardar' />
            <Button width='10rem' className='danger' content='Cancelar' event={handleModal} />
            <Button width='10rem' className='info' content='Visualizar' />
            <Button width='10rem' className='gris' content='Cronograma' />
        </FragmentContainer>
    )
}
