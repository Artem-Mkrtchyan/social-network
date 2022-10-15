import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChatState, IMessage, TStatusChat } from '../../types/chatType';


const initialState: IChatState = {
  loading: false,
  error: '',
  status: 'pending',
  data: []
}

export const chatSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setMessages(state, action: PayloadAction<IMessage[]>) {
      state.data = [...state.data, ...action.payload]
    },
    statusChanged(state, action: PayloadAction<TStatusChat>) {
      state.status = action.payload
    },
    clearMessage(state) {
      state.data = []
    }
  }
})

export default chatSlice.reducer
