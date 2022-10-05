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


export interface IDataAuth {
  id: number | null
  email: string | null
  login: string | null
}

export interface IloginForm {
  email: string
  password: string
  rememberMe: boolean
}

export interface IServerResponse<T> {
  resultCode: resultCode
  messages: Array<string>
  data: T
}

export enum resultCode {
  Success = 0,
  Error = 1
}
