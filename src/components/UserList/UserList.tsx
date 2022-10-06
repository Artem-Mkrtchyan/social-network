import React from 'react';
import styles from './userList.module.css'

interface IProps {
  children: React.ReactNode
}

export const UserList: React.FC<IProps> = ({children}) => {
  return (
    <ul className={styles.userList}>
      {children}
    </ul>
  )
}
