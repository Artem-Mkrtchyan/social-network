import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReduser from './slices/profileSlice';
import authReduser from './slices/authSlice';
import usersReduser from "./slices/usersSlice";


const rootReducer = combineReducers({
  auth: authReduser,
  profile: profileReduser,
  users: usersReduser
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type  AppDispatch = typeof store.dispatch
