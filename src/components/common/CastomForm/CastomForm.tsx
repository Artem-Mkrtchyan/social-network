import React, {FormHTMLAttributes} from 'react';
import { Error } from '../../Error/Error';
import { BottonForm } from '../FormButton/ButtonForm';
import styles from './castomForm.module.css'

interface IPropsForm extends FormHTMLAttributes<HTMLFormElement>{
  children: React.ReactNode,
  title?: string
  errorMessage: string
}

export const CastomForm: React.FC<IPropsForm> = ({ title, children, errorMessage, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      {title && <h2>{title}</h2>}
      <ul className={styles.list}>
        {children}
      </ul>
      <BottonForm name='Edit profile'/>
      {errorMessage && <Error message={errorMessage}/>}
    </form>
  )
}
