import React from 'react';
import { FieldError } from 'react-hook-form';
import styles from './error.module.css'

interface IError {
  message?: string
}

export const Error: React.FC<IError> = ({message}) => {
  return (
    <p className={styles.error}>{message}</p>
  )
}
