import React from 'react'
import { Button } from '../../shared/Button/Button'
import { FragmentContainer } from '../../shared/FragmentContainer/FragmentContainer'

export const OptionsCreateCredit = () => {
    return (
        <FragmentContainer justifyContent='center' gap='.5rem'>
            <Button width='10rem' className='dark' content='Limpiar' />
            <Button width='10rem' className='success' content='Guardar' />
            <Button width='10rem' className='danger' content='Cancelar' />
            <Button width='10rem' className='info' content='Visualizar' />
            <Button width='10rem' className='gris' content='Cronograma' />
        </FragmentContainer>
    )
}
