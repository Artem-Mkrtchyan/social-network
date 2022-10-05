import React from 'react';
import styles from './layout.module.css'

interface ILayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
