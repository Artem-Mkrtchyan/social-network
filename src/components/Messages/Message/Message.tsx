import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../../Avatar/Avatar';
import styles from './message.module.css';

interface IProps {
  userId: number
  userName: string
  photo: string
  message: string
}

export const Message: React.FC<IProps> = memo(({userId, message, photo, userName}) => {
  return (
    <li className={styles.messageBlock}>
      <Avatar img={photo}/>
      <div className={styles.textWrapp}>
          <Link to={`/profile/${userId}`}>{userName}</Link>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
})
