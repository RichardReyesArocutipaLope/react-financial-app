import { Button } from "../../shared/Button/Button"


export const OptionsExportCreditData = ({ setIsOpenModal }) => {

    const handleModal = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <Button width='11rem' className='danger' content='Cancelar' event={handleModal}/>
        </>
    )
}
