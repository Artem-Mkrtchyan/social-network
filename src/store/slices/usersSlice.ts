import { IUsers } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UsersState {
  loading: boolean,
  error: string,
  data: {
    items: Array<IUsers>,
    totalCount: number
    pageSize: number,
    currentPage: number,
    followingIsProgress: Array<number>
  }
}

const initialState: UsersState = {
  loading: false,
  error: '',
  data: {
    items: [],
    totalCount: 1,
    currentPage: 1,
    pageSize: 30,
    followingIsProgress: [],
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
      state.loading = false
      state.data.items = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>){
      state.data.currentPage = action.payload
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      state.data.totalCount = action.payload
    },

  }
})

export default usersSlice.reducer
