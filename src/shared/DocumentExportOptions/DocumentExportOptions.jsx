import { Button } from "../Button/Button"


export const DocumentExportOptions = () => {
    return (
        <>
            <Button width='8.1rem' className='print-pdf' content={<i class="fa-solid fa-file-pdf icon"></i>}/>
            <Button width='8.1rem' className='dark' content={<i class="fa-solid fa-print icon"></i>}/>
            <Button width='8.1rem' className='secondary' content={<i class="fa-solid fa-image icon"></i>} />
            <Button width='8.1rem' className='danger' content='Cancelar' />
        </>
    )
}
