import { IloginForm } from './../../types/types';
import { authSlice } from './../slices/authSlice';
import { authAPI } from './../../axios/axios';
import { AppDispatch } from "../store";
import { resultCode } from '../../types/types';


export const getDataAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.fetching())
    const response = await authAPI.getMe()
    if (response.resultCode === resultCode.Success) {
      dispatch(authSlice.actions.isAuth(true))
      dispatch(authSlice.actions.setUserData(response.data))
    } else {
      dispatch(authSlice.actions.isAuth(false))
    }
  } catch (error) {
    dispatch(authSlice.actions.fetchError(error as Error))
  }
}

export const logout = () => async (dispatch: AppDispatch) => {
  const response = await authAPI.logOut()
  if (response.resultCode === resultCode.Success) {
    dispatch(authSlice.actions.setUserData({ id: null, email: null, login: null }))
    dispatch(authSlice.actions.isAuth(false))
  }
}

export const logIn = (data: IloginForm) => async (dispatch: AppDispatch) => {

  try {
    dispatch(authSlice.actions.fetching())
    const response = await authAPI.logIn(data);
    if (response.resultCode === resultCode.Success) {
      dispatch(getDataAuth())
    } else throw Error('Authorisation Error')
  } catch (error) {
    dispatch(authSlice.actions.fetchError(error as Error))
  }
}
