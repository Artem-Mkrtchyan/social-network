export interface ProfileState {
  loading: boolean,
  error: string,
  data: {
    profile: IProfile
    status: string
    editMode: boolean
  }
}

export type IProfile = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: IContacts
  photos: {
    small: string
    large: string
  }
}

export interface IContacts {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export interface IProfileEdit {
  aboutMe: string
  contacts: IContacts
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
}

export interface IPhotoProfileResponse {
  photos: {
    small: string
    large: string
  }
}
