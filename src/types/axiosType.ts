export interface IServerResponse<T> {
  resultCode: resultCode
  messages: Array<string>
  data: T
}

export type TPutStatus = {
  resultCode: resultCode
  messages: Array<string>,
}

export enum resultCode {
  Success = 0,
  Error = 1
}
