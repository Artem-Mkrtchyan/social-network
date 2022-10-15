import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile } from '../../types/profileType';
import { IUsers, IUsersState } from '../../types/usersType';

const initialState: IUsersState = {
  loading: false,
  error: '',
  data: {
    items: [],
    totalCount: 1,
    currentPage: 1,
    pageSize: 30,
    followingIsProgress: [],
    profileUser: {
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
      status: ''
    }
  }
}


export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    setUsers(state, action: PayloadAction<Array<IUsers>>) {
      state.loading = false;
      state.error = '';
      state.data.items = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>){
      state.data.currentPage = action.payload
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      state.data.totalCount = action.payload
    },
    subscribe(state, action: PayloadAction<{id: number}>){
      state.data.items.map(user => {
        if(user.id === action.payload.id){
          user.followed = !user.followed
        }
        return user
      })
    },
    followingIsProgress(state, action: PayloadAction<{id: number, isFetching: boolean}>) {
      action.payload.isFetching ?
      state.data.followingIsProgress.push(action.payload.id) :
      state.data.followingIsProgress = state.data.followingIsProgress.filter(id => id !== action.payload.id);
    },
    getUfetchSuccess(state, action: PayloadAction<IProfile>) {
      state.loading = false
      state.data.profileUser.profile = action.payload
    },
    setProfileStatus(state, action: PayloadAction<string>) {
      state.data.profileUser.status = action.payload
    }
  }
})

export default usersSlice.reducer
