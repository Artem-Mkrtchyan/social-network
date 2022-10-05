import { IProfileEdit } from './../../types/types';
import { IProfile } from "../../types/types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProfileState {
  loading: boolean,
  error: string,
  data: {
    profile: IProfile
    status: string
    editMode: boolean
  }
}

const initialState: ProfileState = {
  loading: false,
  error: '',
  data: {
    profile: {
      userId: 0,
      lookingForAJob: false,
      lookingForAJobDescription: 'string',
      fullName: '',
      aboutMe: '',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
      },
      photos: {
        small: '',
        large: '',
      }
    },
    status: 'set status',
    editMode: false
  }
}


export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<IProfile>) {
      state.loading = false
      state.data.profile = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.data.editMode = false
      state.loading = false
      state.error = action.payload.message
    },
    resetError(state) {
      state.error = ''
    },
    setProfileStatus(state, action: PayloadAction<string>) {
      state.data.status = action.payload
    },
    updatePhotoProfile(state, action: PayloadAction<{large: string, small: string}>) {
      state.data.profile.photos = action.payload
    },
    updataProfileInfo(state, action: PayloadAction<IProfileEdit>) {
      state.loading = false
      state.data.editMode = true
      state.data.profile.aboutMe = action.payload.aboutMe
      state.data.profile.contacts = action.payload.contacts
      state.data.profile.fullName = action.payload.fullName
      state.data.profile.lookingForAJob = action.payload.lookingForAJob
      state.data.profile.lookingForAJobDescription = action.payload.lookingForAJobDescription
    },
    resetEditMode(state) {
      state.data.editMode = false
    }
  }
})

export default profileSlice.reducer
