import React, {useEffect} from 'react'
import { Error} from '../../components/Error/Error';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProfile, getStatus, updateProfileStatus } from '../../store/actions/actionProfile';

export const ProfilePage = () => {
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
