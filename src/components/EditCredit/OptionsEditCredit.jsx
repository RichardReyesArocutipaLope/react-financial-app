import { Button } from '../../shared/Button/Button'

export const OptionsEditCredit = () => {
    return (
        <>
            <Button width='10rem' className='dark' content='Restablecer' />
            <Button width='10rem' className='success' content='Guardar' />
            <Button width='10rem' className='danger' content='Cancelar' />
            <Button width='10rem' className='gris' content='Cronograma' />
            <Button width='10rem' className='info' content='Visualizar' />
        </>
    )
}
