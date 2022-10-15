import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Error} from '../../components/Error/Error';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getStatus, getUserProfile } from '../../store/actions/actionsUsers';
import { selectors } from '../../store/selectors';


export const ProfileUserPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const id = Number(useParams().id)

  const {profile, status} = useAppSelector(selectors.profileUsers)
  const {error, loading} = useAppSelector(selectors.usersState)
  useEffect(() => {
    id && dispatch(getUserProfile(id))
    id && dispatch(getStatus(id))
  }, [id])

  return (
    <div>
      {error && <Error message={error}/>}
      {loading && <Preloader />}
      <ProfileInfo editModeProfile={false} profileInfo={profile} status={status} updateStatus={undefined}/>
    </div>
  )
}
