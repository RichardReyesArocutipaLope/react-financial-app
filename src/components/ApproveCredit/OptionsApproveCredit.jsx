import { Button } from '../../shared/Button/Button'
import { FragmentContainer } from '../../shared/FragmentContainer/FragmentContainer'

export const OptionsApproveCredit = ({ setIsOpenModal }) => {

    const handleModal = () => {
        setIsOpenModal(false)
    }

    return (
        <FragmentContainer justifyContent='center' gap='.9rem'>
            <Button width='10rem' className='danger' content='Aprobar' />
            <Button width='10rem' className='success' content='Cancelar' event={handleModal}/>
        </FragmentContainer>
    )
}
