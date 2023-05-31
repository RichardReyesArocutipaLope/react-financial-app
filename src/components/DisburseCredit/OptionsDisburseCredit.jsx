import { Button } from '../../shared/Button/Button'
import { FragmentContainer } from '../../shared/FragmentContainer/FragmentContainer'

export const OptionsDisburseCredit = ({ setIsOpenModal }) => {

    const handleModal = () => {
        setIsOpenModal(false)
    }

    return (
        <FragmentContainer justifyContent='center' gap='.9rem'>
            <Button width='10.5rem' className='danger' content='Desembolsar' />
            <Button width='9rem' className='success' content='Cancelar'  event={handleModal}/>
        </FragmentContainer>
    )
}
