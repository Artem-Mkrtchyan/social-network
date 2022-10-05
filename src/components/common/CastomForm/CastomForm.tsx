import React, {FormHTMLAttributes} from 'react';
import { BottonForm } from '../FormButton/ButtonForm';
import styles from './castomForm.module.css'

interface IPropsForm extends FormHTMLAttributes<HTMLFormElement>{
  children: React.ReactNode,
  title: string
}

export const CastomForm: React.FC<IPropsForm> = ({ title, children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {children}
      </ul>
      <BottonForm name='Edit profile'/>
    </form>
  )
}
