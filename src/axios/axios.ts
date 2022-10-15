import axios from "axios";
import { IDataAuth, IloginForm } from "../types/authType";
import { IServerResponse, TPutStatus } from "../types/axiosType";
import { IPhotoProfileResponse, IProfile, IProfileEdit } from "../types/profileType";
import { IUsersDataResp } from "../types/usersType";

export const instansAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': 'd8ebd29e-860f-4823-a5b5-5fc89d81d8d8'
  }
})

export const profileAPI = {
  getProfile(userId: number) {
    return instansAxios.get<IProfile>(`/profile/${userId}`).then(resp => resp.data)
  },

  putProfile(data: IProfileEdit) {
    return instansAxios.put<IServerResponse<null>>(`/profile/`, data).then(resp => resp.data)
  },

  getStatus(userId: number) {
    return instansAxios.get<string>(`profile/status/${userId}`).then(response => response.data)
  },

  putStatus(status: string) {
   return instansAxios.put<TPutStatus>(`/profile/status`, { status }).then(response => response.data)
  },

  putPhoto(photo: any) {
    const fromData = new FormData()
    fromData.append('image', photo);
    return instansAxios.put<IServerResponse<IPhotoProfileResponse>>('profile/photo', fromData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(response => response.data)
  }
}

export const authAPI = {
  getMe() {
    return instansAxios.get<IServerResponse<IDataAuth>>('/auth/me').then(response => response.data)
  },
  logOut() {
    return instansAxios.delete<IServerResponse<null>>('/auth/login').then(response => response.data)
  },
  logIn(data: IloginForm) {
    return instansAxios.post<IServerResponse<IDataAuth>>('/auth/login', data).then(response => response.data)
  }
}

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instansAxios.get<IUsersDataResp>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  subscribe(userId: number, follow: boolean){

    //if the user is not subscribed, we send a subscription request
    if (!follow) return instansAxios.post<IServerResponse<null>>(`/follow/${userId}`).then(response => response.data)

    //else reauest for delete
    return instansAxios.delete<IServerResponse<null>>(`/follow/${userId}`).then(response => response.data)
  },
}
