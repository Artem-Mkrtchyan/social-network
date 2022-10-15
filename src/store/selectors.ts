import { RootState } from "./store"

export const selectors = {
  chatState: (state: RootState) => state.chat,

  authState: (state: RootState) => state.auth,
  idOwner: (state: RootState) => state.auth.data.id,

  profileState: (state: RootState) => state.profile,

  usersState: (state: RootState) => state.users,
  usersData: (state: RootState) => state.users.data,
  profileUsers: (state: RootState) => state.users.data.profileUser
}
