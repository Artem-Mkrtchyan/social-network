export interface IChatState {
  loading: boolean
  error: string
  status: TStatusChat
  data: Array<IMessage>
}

export interface IMessage {
  message: string
  photo: string
  userId: number
  userName: string
}

export type TStatusChat = 'pending' | 'ready'
