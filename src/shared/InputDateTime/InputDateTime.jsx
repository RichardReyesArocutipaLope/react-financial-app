import React from 'react'
import './InputDateTime.css'
import { InputContainer } from '../InputContainer/InputContainer'

export const InputDateTime = ({ col, label, name}) => {
  return (
    <InputContainer col={col}>
      <input type="datetime-local" name={name} id={name} className='input input-datetime' />
      <label className='input__label' htmlFor={name}>{label}</label>
    </InputContainer>

  )
}
