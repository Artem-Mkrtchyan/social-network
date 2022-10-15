import { IProfile } from "./profileType"

export interface IUsersState {
  loading: boolean,
  error: string,
  data: {
    items: Array<IUsers>,
    totalCount: number
    pageSize: number,
    currentPage: number,
    followingIsProgress: Array<number>
    profileUser: {
      profile: IProfile
      status: string
    }
  }
}

export interface IUsers {
  name: string,
  id: number,
  photos: {
    small: string
    large: string
  }
  status: string,
  followed: boolean
}

export interface IUsersDataResp {
  items: Array<IUsers>,
  totalCount: number
  error: string
}
