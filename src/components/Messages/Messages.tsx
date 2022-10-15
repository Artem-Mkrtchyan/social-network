import React from 'react';
import styles from './messages.module.css'

interface IProps {
  children: React.ReactNode
  scrollHandler: (e: React.UIEvent<HTMLUListElement, UIEvent>) => void
}

export const Messages: React.FC<IProps> = React.memo ( ({children, scrollHandler}) => {
  return (
    <ul className={styles.massagesList} onScroll={scrollHandler}>
      {children}
    </ul>
  )
})
