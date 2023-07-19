import { useDispatch } from "react-redux";
import { Button, FragmentContainer } from "../../../ui/components"
import { setSubmitCreditCreateForm } from "../../../store/credits/creditsOptionsSlice";

export const OptionsDeleteCredit = ({ setIsOpenModal }) => {

    const handleModal = () => { setIsOpenModal(false) }

    const dispatch = useDispatch();
    const onSubmit = () => {
        dispatch(setSubmitCreditCreateForm(true))
    }
    return (
        <FragmentContainer justifyContent='center' gap='.9rem'>
            <Button width='10rem' className='danger' content='Eliminar' event={onSubmit}/>
            <Button width='10rem' className='success' content='Cancelar' event={handleModal} />
        </FragmentContainer>
    )
}
