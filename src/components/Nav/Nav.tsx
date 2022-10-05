import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css'

export const Nav: React.FC = () => {


  return (
    <nav className={styles.nav}>
      <h3 className={styles.title}>menu</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'>Profile</Link>
        </li>
        <li className={styles.item}>
          <Link to='/friends'>Friends</Link>
        </li>
        <li className={styles.item}>
          <Link to='/message'>Messages</Link>
        </li>
        <li className={styles.item}>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
