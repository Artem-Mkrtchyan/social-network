import { authSlice } from './../slices/authSlice';
import { authAPI, securityAPI } from './../../axios/axios';
import { AppDispatch } from "../store";
import { resultCode } from '../../types/axiosType';
import { IloginForm } from '../../types/authType';


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
    dispatch(authSlice.actions.setUserData({ id: null, email: null, login: null, captcha: null }))
    dispatch(authSlice.actions.isAuth(false))
  }
}

export const logIn = (data: IloginForm) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.fetching())
    const response = await authAPI.logIn(data);
    if (response.resultCode === resultCode.Success) {
      dispatch(getDataAuth())
    } else {
      if (response.resultCode === resultCode.Captcha) {
        dispatch(getCaptchaULR())
      }
      throw Error(response.messages.join(''))
    }
  } catch (error) {
    dispatch(authSlice.actions.fetchError(error as Error))
  }
}

const getCaptchaULR = () => async (dispatch: AppDispatch) => {
  const response = await securityAPI.getCatpcha();
  dispatch(authSlice.actions.setCaptchaURL(response.url))
}
