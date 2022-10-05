import { IUsers } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UsersState {
  loading: boolean,
  error: string,
  data: IUsers
}

const initialState: UsersState = {
  loading: false,
  error: '',
  data: {

  }
}

export const usersSlice = createSlice({
  name: 'users',
  initialState:
  reducers: {

  }
})
