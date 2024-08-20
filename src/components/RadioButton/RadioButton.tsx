import React from 'react'
import { IRadioButton } from '../../interfaces/RadioButton'

function RadioButton({...prop}:IRadioButton) {
  return <input  {...prop} type="checkbox" />
}

export default RadioButton