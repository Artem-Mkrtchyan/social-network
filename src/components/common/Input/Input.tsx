import React, {InputHTMLAttributes} from 'react';
import { Error } from '../../Error/Error';
import classNames from 'classnames'
import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  typeInputCheckbox?: 'chexbox'
  errorMessage?: string
}

export const Input: React.FC<InputProps> = ({id, label, typeInputCheckbox, errorMessage, ...props}) => {

  const chexbox = typeInputCheckbox === 'chexbox'

  const inputClass = classNames({
    [styles.input]: true,
    [styles.inputCheckbox]:  chexbox,
    inputError: !!errorMessage,
  })
  const labelChecbox = classNames({[styles.labelChecbox]: chexbox})

  return (
    <li className={styles.inputWrap}>
      <div className={styles.inputInner}>
        {chexbox && <input className={inputClass} type='checkbox' id={id} {...props}/>}
        <label className={labelChecbox} htmlFor={id}>{label}</label>
        {!chexbox && <input className={inputClass} id={id} {...props}/>}

      </div>
      {errorMessage && <Error message={errorMessage}/>}
    </li>
  )
}
