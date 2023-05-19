import React from 'react'
import { Button } from '../../shared/Button/Button'

export const OptionsApproveCredit = () => {
    return (
        <>
            <Button width='10rem' className='danger' content='Aprobar' />
            <Button width='10rem' className='success' content='Cancelar' />
        </>
    )
}
