import React from 'react';
import styles from './button.module.css'

interface IButton {
  name: string
  onClick?: () => void
}

export const Button: React.FC<IButton> = ({name, onClick, ...props}) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>{name}</button>
  )
}
