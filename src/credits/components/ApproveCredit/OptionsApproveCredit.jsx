import { Button, FragmentContainer } from "../../../ui/components"

export const OptionsApproveCredit = ({ setIsOpenModal }) => {

    const handleModal = () => { setIsOpenModal(false) }

    return (
        <FragmentContainer justifyContent='center' gap='.9rem'>
            <Button width='10rem' className='danger' content='Aprobar' />
            <Button width='10rem' className='success' content='Cancelar' event={handleModal} />
        </FragmentContainer>
    )
}
