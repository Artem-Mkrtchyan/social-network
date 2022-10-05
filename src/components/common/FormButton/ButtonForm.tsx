import React from 'react';
import styles from './formButton.module.css'

interface IBotton {
  name: string
}

export const BottonForm: React.FC<IBotton> = ({name}) => {
  return (
    <button className={styles.button}>{name}</button>
  )
}
