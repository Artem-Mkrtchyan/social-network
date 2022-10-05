import { IProfileEdit } from './../../types/types';
import { resultCode } from '../../types/types';
import { profileSlice } from '../slices/profileSlice';
import { profileAPI } from './../../axios/axios';
import { AppDispatch } from './../store';

export const fetchProfile = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(profileSlice.actions.fetching())
    const response = await profileAPI.getProfile(userId);
    dispatch(profileSlice.actions.fetchSuccess(response));

  } catch (error) {
    dispatch(profileSlice.actions.fetchError(error as Error))
  }
}

export const getStatus = (id: number) => async (dispatch: AppDispatch) => {
    const status = await profileAPI.getStatus(id);
    dispatch(profileSlice.actions.setProfileStatus(status));
}

export const updateProfileStatus = (status: string) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.putStatus(status);
    if(response.resultCode === resultCode.Success) {
      dispatch(profileSlice.actions.setProfileStatus(status))
    }
}

export const updateProfile = (dataEdit: IProfileEdit) => async (dispatch: AppDispatch) => {
  try {
    const response = await profileAPI.putProfile(dataEdit);
    if(response.resultCode === resultCode.Success) {
      dispatch(profileSlice.actions.resetError())
      dispatch(profileSlice.actions.updataProfileInfo(dataEdit))

    } else throw new Error(response.messages.join('. '))
  } catch (error) {
    dispatch(profileSlice.actions.fetchError(error as Error))
  }
}

export const editMode =() => (dispatch: AppDispatch) => {
  dispatch(profileSlice.actions.resetEditMode())
}

export const updatePhotoProfile = (photo: any) => async (dispatch: AppDispatch) => {
  const response = await profileAPI.putPhoto(photo);
  if(response.resultCode === resultCode.Success) {
    dispatch(profileSlice.actions.updatePhotoProfile(response.data.photos))
  }
}
