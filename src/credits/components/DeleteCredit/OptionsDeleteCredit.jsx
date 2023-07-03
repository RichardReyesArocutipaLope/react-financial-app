import { Button, FragmentContainer } from "../../../ui/components"

export const OptionsDeleteCredit = ({ setIsOpenModal }) => {

    const handleModal = () => { setIsOpenModal(false) }

    return (
        <FragmentContainer justifyContent='center' gap='.9rem'>
            <Button width='10rem' className='danger' content='Eliminar' />
            <Button width='10rem' className='success' content='Cancelar' event={handleModal} />
        </FragmentContainer>
    )
}
