import React from 'react';
import { IUsers } from '../../../types/types';
import defaultImg from '../../../assets/img/default.jpg';
import classNames from 'classnames';
import styles from './userItem.module.css';
import { NavLink } from 'react-router-dom';

export const UserItem: React.FC<IUsers> = (props) => {
  const buttonFollowClass = classNames({
    [styles.follow]: true,
    [styles.unfollow]: props.followed
  })

  return (
    <li className={styles.userItem}>
      <NavLink to={`/profile/${props.id}`} className={styles.photoWrap}>
      {props.photos.large ?
      <img className={styles.img} src={props.photos.large} alt="avatar" /> :
      <img className={styles.img} src={defaultImg} alt='ava'/>
      }
      </NavLink>
      <div className={styles.info}>
        <h4 className={styles.userName}>{props.name}</h4>
        {props.status && <span className={styles.status}>{props.status}</span>}
        <button className={buttonFollowClass}>{props.followed ? 'Unfollow' : 'Follow'}</button>
      </div>
    </li>
  )
}
