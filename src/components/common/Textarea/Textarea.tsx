import React, {TextareaHTMLAttributes} from 'react';
import { Error } from '../../Error/Error';
import styles from './textarea.module.css'

interface ITexarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    label: string
    errorMessage?: string
}

export const Textarea: React.FC<ITexarea> = ({id, label, errorMessage, ...props}) => {
  return (
    <li className={styles.inputWrap}>
      <div className={styles.inputInner}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <textarea className={styles.texarea} id={id} {...props}/>
      </div>
      {errorMessage && <Error message={errorMessage}/>}
    </li>
  )
}
