import React, {ButtonHTMLAttributes} from 'react';
import styles from './button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  name: string
}

export const Button: React.FC<IButton> = ({name, ...props}) => {
  return (
    <button className={styles.button} {...props}>{name}</button>
  )
}
