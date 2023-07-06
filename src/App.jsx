import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { startLogin } from "./store/auth"
import { AppRouter } from "./router/AppRouter"
import { Modal } from "./ui/components"

export const App = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalBodyContent, setModalBodyContent] = useState(<></>)
    const [modalFooterContent, setModalFooterContent] = useState(<></>)
    const [modalProperties, setModalProperties] = useState({
        width: 'modal-l',
        heightBody: '40rem',
        bodyHeightClass: '',
        staticBackdrop: false,
        scroll: false,
        verticallyCentered: false,
        title: 'MODAL',
        bodyBackgroundColor: 'var(--bg-two-color-white)',
        footerHeightClass: '',
    })

    const handleModal = (typeOfOperation = '', bodyComponent = <></>, footerComponet = <></>, modalProperties = {}) => {
        if (typeOfOperation === 'setData') {
            setModalBodyContent(bodyComponent)
            setModalFooterContent(footerComponet)
            modalProperties && setModalProperties(modalProperties)
            setIsOpenModal(!isOpenModal);
            return;
        }
        setIsOpenModal(!isOpenModal);
    }

    const anotherModal = (anotherBodyComponent = <></>, anotherFooterComponet = <></>, anotherModalProperties = {}) => {
        setModalBodyContent(anotherBodyComponent)
        setModalFooterContent(anotherFooterComponet)
        modalProperties && setModalProperties(anotherModalProperties)
    }

    const dispatch = useDispatch();
    const data = { fullName: 'administrador', password: 'Password123' }
    useEffect(() => {
        dispatch(startLogin(data))

    }, [])

    return (
        <>
            <AppRouter />
            <Modal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                handleModal={handleModal}
                modalBodyContent={modalBodyContent}
                modalFooterContent={modalFooterContent}
                modalProperties={modalProperties}
                anotherModal={anotherModal}
            />
        </>
    )

}
