import { Registration } from './pages/Login/Registration';
import { FormInfo } from "./components/ProfileInfo/FormInfo/FormInfo";
import { Chat } from "./pages/Chat/Chat";
import { Login } from "./pages/Login/Login";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { ProfileUserPage } from "./pages/Profile/ProfileUserPage";
import { Users } from "./pages/Users/Users";
import { CHAT_ROUT, EDIT_PROFILE, LOGIN_ROUTE, PROFILE_OWNER, PROFILE_USER, REGISTRATION, USERS } from "./utils/constants";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Element: Login
  },
  {
    path: REGISTRATION,
    Element: Registration

  }
]

export const privateRoutes = [
  {
    path: PROFILE_OWNER,
    Element: ProfilePage
  },
  {
    path: CHAT_ROUT,
    Element: Chat
  },
  {
    path: USERS,
    Element: Users
  },
  {
    path: PROFILE_USER,
    Element: ProfileUserPage
  },
  {
    path: EDIT_PROFILE,
    Element: FormInfo
  },
]
