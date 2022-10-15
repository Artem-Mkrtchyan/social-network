import { profileAPI } from './../../axios/axios';
import { usersSlice } from './../slices/usersSlice';
import { AppDispatch } from "../store";
import { usersAPI } from '../../axios/axios';
import { resultCode } from '../../types/axiosType';

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.fetching())
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(usersSlice.actions.setUsers(response.items))
    dispatch(usersSlice.actions.setTotalUsersCount(response.totalCount))
    dispatch(usersSlice.actions.setCurrentPage(currentPage))
  } catch (error) {
    console.log(error)
  }

}

export const followUser = (id: number, followed: boolean) => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.followingIsProgress({id, isFetching: true}))

  usersAPI.subscribe(id, followed).then(response => {
    if (response.resultCode === resultCode.Success) {
      dispatch(usersSlice.actions.subscribe({id}))
    }
    dispatch(usersSlice.actions.followingIsProgress({id, isFetching: false}))
  })
}

export const defaultCurrentPage = (currentPage: number) => (dispatch: AppDispatch) => {
  dispatch(usersSlice.actions.setCurrentPage(currentPage))
}

export const getUserProfile = (userId: number) => async (dispatch: AppDispatch) => {
    dispatch(usersSlice.actions.fetching())
    const response = await profileAPI.getProfile(userId);
    dispatch(usersSlice.actions.getUfetchSuccess(response));
}

export const getStatus = (id: number) => async (dispatch: AppDispatch) => {
  const status = await profileAPI.getStatus(id);
  dispatch(usersSlice.actions.setProfileStatus(status));
}
