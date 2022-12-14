import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IContacts, IProfile } from '../../types/profileType';
import styles from './profileInfo.module.css'
import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

interface IProfileInfo {
  profileInfo: IProfile
  status: string
  editModeProfile: boolean
  updateStatus?: (status: string) => void
}

export const ProfileInfo: React.FC<IProfileInfo> = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/editProfile')
  }

  return (
    <div className={styles.infoWrapper}>
      <ProfilePhoto editMode={props.editModeProfile} photo={props.profileInfo.photos.large} />
      <div className={styles.profileDataWrap}>
        <div className={styles.profileDataTop}>
          <h1 className={styles.dataName}>{props.profileInfo.fullName}</h1>
          <ProfileStatus editMode={props.editModeProfile} status={props.status} updateStatus={props.updateStatus} />
        </div>

        <div className={styles.aboutMeWpap}>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>
                About me
              </h3>
              <p className={styles.itemInfo}>{props.profileInfo.aboutMe}</p>
            </li>
            <li className={styles.infoItem}>
              <h3 className={styles.itemTitle}>
                My professional Skills
              </h3>
              <p>{props.profileInfo.lookingForAJobDescription}</p>
            </li>
          </ul>
        </div>

        <div className={styles.profileData}>
          <ul className={styles.listData}>

            {Object.keys(props.profileInfo.contacts).map((key ) => (
              props.profileInfo.contacts[key as keyof IContacts] &&
              <li key={key} className={styles.itemData}>
                <h3 className={styles.itemTitle}>{key}</h3>
                <p className={styles.itemInfo}><a target='brank' href={`https://${props.profileInfo.contacts[key as keyof IContacts]}`}>{props.profileInfo.contacts[key as keyof IContacts]}</a></p>
              </li>
            ))}
          </ul>
          {props.editModeProfile && <button className={styles.buttonEdit} onClick={onClick}>Edit</button>}
        </div>
      </div>
    </div>
  )
}

