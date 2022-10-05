import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDataAuth, logout } from '../../store/actions/actionAuth';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import styles from './header.module.css'


export const Header: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const {fullName, photos} = useAppSelector(state => state.profile.data.profile)
  const isAuth = useAppSelector(state => state.auth.isAuth);

  useEffect(() => {
    dispatch(getDataAuth())
  }, [])

  const logoutClick = () => {
    dispatch(logout())
  }


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {isAuth ?
          <div className={styles.rightBlock}>
            <Avatar img={photos.small} name={fullName} />
            <Button name='SingOut' onClick={logoutClick} />
          </div> :
          <div className={styles.rightBlock}>
            <Button name='Sing In' onClick={() => navigate('/login/')} />
            <Button name='Sing Up' onClick={() => navigate('/singup/')}/>
          </div>
        }
      </div>
    </header>
  )
}
