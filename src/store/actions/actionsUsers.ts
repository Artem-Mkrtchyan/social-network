import { usersSlice } from './../slices/usersSlice';
import { AppDispatch } from "../store";
import { usersAPI } from '../../axios/axios';

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.fetching())
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(usersSlice.actions.setUsers(response.items))
    dispatch(usersSlice.actions.setTotalUsersCount(response.totalCount))
    dispatch(usersSlice.actions.setCurrentPage(currentPage))
  } catch (error) {

  }

}

