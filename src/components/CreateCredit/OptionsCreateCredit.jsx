import React from 'react'
import { Button } from '../../shared/Button/Button'

export const OptionsCreateCredit = () => {
    return (
        <>
            <Button width='10rem' className='dark' content='Limpiar' />
            <Button width='10rem' className='success' content='Guardar' />
            <Button width='10rem' className='danger' content='Cancelar' />
            <Button width='10rem' className='gris' content='Cronograma' />
            <Button width='10rem' className='info' content='Visualizar' />
        </>
    )
}
