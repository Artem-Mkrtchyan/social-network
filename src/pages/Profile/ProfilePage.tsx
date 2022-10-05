import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Error} from '../../components/Error/Error';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProfile, getStatus, updateProfileStatus } from '../../store/actions/actionProfile';

export const ProfilePage = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const navigate = useNavigate();

  //redirect to login page. If don't authtorize
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.auth.data.id)

  const updateStatus = (status: string) => {
    dispatch(updateProfileStatus(status))
  }

  const {error, loading, data} = useAppSelector(state => state.profile)
  useEffect(() => {
    id && dispatch(fetchProfile(id))
    id && dispatch(getStatus(id))
  }, [id])

  return (
    <div>
      {error && <Error message={error}/>}
      {loading && <Preloader />}
      <ProfileInfo profileInfo={data.profile} status={data.status} updateStatus={updateStatus}/>
    </div>
  )
}
