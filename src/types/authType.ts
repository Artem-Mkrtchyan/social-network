export interface IAuthState {
  loading: boolean,
  error: string,
  isAuth: boolean
  data: IDataAuth
}

export interface IDataAuth {
  id: number | null
  email: string | null
  login: string | null
  captcha: string | null
}

export interface IloginForm {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}
