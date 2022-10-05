import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReduser from './slices/profileSlice';
import authReduser from './slices/authSlice'


const rootReducer = combineReducers({
  auth: authReduser,
  profile: profileReduser,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type  AppDispatch = typeof store.dispatch
