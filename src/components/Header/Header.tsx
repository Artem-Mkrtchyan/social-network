import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDataAuth, logout } from '../../store/actions/actionAuth';
import { fetchProfile } from '../../store/actions/actionProfile';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import styles from './header.module.css'


export const Header: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const {fullName, photos} = useAppSelector(state => state.profile.data.profile)
  const id = useAppSelector(state => state.auth.data.id)
  const isAuth = useAppSelector(state => state.auth.isAuth);

  useEffect(() => {
    dispatch(getDataAuth())
  }, [])

  useEffect(() => {
    id && dispatch(fetchProfile(id))
  }, [id])

  const logoutClick = () => {
    dispatch(logout())
  }

  const redirect = (param: string) => {
    navigate(`/${param}`)
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
            <Button name='Sing In' onClick={() => redirect('login')} />
            <Button name='Sing Up' onClick={() => redirect('registration')}/>
          </div>
        }
      </div>
    </header>
  )
}
