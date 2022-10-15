import { chatSlice } from './../slices/chatSlice';
import { chatAPI } from './../../axios/chatAPI';
import { AppDispatch } from "../store"
import { IMessage, TStatusChat } from '../../types/chatType';

let _newMessageHandler: ((messages: Array<IMessage>) => void) | null = null
const newMessageHandlerCreator = (dispatch: AppDispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: Array<IMessage>) => {
      dispatch(chatSlice.actions.setMessages(messages))
    }
  }

  return _newMessageHandler
}

let _statusChangedHandler: ((status: TStatusChat) => void) | null = null
const statusChangedHandler = (dispatch: AppDispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status: TStatusChat) => {
      dispatch(chatSlice.actions.statusChanged(status))
    }
  }

  return _statusChangedHandler
}



export const getMessage = () => (dispatch: AppDispatch) => {
  chatAPI.startChannel()
  chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-changet', statusChangedHandler(dispatch))
}

export const stopMessage = () => (dispatch: AppDispatch) => {
  chatAPI.stopChannel()
  chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-changet', statusChangedHandler(dispatch))
}

export const sendMessage = (message: string) => (dispatch: AppDispatch) => {
  chatAPI.sendMessage(message)
}

export const clearMessageChat = () => (dispatch: AppDispatch) => {
  dispatch(chatSlice.actions.clearMessage())
}
