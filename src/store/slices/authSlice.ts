import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, IDataAuth } from '../../types/authType';

const initialState: IAuthState = {
  loading: false,
  error: '',
  isAuth: false,
  data: {
    id: null,
    email: null,
    login: null
  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    setUserData(state, action: PayloadAction<IDataAuth>) {
      state.loading = false;
      state.error = '';
      state.data.id = action.payload.id
      state.data.login = action.payload.login
      state.data.email = action.payload.email
    },
    isAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default authSlice.reducer
