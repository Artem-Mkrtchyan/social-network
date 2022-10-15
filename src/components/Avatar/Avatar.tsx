import React from 'react';
import styles from './avatar.module.css'

type IProps = {
  img?: string
  name?: string
}

export const Avatar: React.FC<IProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperAvatar}>
        {props.img ?
          <img className={styles.img} src={props.img} alt="avatar" /> :
          <svg viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <title>avatar-line</title>
            <path d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z"></path><path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z"></path>
            <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
          </svg>
        }
      </div>
      {props.name && <p className={styles.name}>{props.name}</p>}
    </div>
  )
}
