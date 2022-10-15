import React, { useEffect } from 'react'
import { Error } from '../../components/Error/Error';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProfile, getStatus, updateProfileStatus } from '../../store/actions/actionProfile';
import { selectors } from '../../store/selectors';

export const ProfilePage: React.FC = () => {
  const { error, loading, data } = useAppSelector(selectors.profileState)

  const dispatch = useAppDispatch();

  const id = useAppSelector(selectors.idOwner);

  const updateStatus = (status: string) => {
    dispatch(updateProfileStatus(status))
  }

  useEffect(() => {
    id && dispatch(fetchProfile(id))
    id && dispatch(getStatus(id))
  }, [id])

  return (
    <section>
      {error && <Error message={error} />}
      {loading && <Preloader />}
      <ProfileInfo
        editModeProfile={true}
        profileInfo={data.profile}
        status={data.status}
        updateStatus={updateStatus}
      />
    </section>
  )
}
