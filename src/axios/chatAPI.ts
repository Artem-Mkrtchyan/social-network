import { IMessage, TStatusChat } from "../types/chatType";

let ws: WebSocket | null = null;

const closeHandler = () => {
  notifySubscriberAboutStatus('pending')
  setTimeout(createChannel, 3000)
}

const notifySubscriberAboutStatus = (status: TStatusChat) => {
  subscribers["status-changet"] .forEach(sub => sub(status))
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.removeEventListener('message', messageHandler)
  ws?.removeEventListener('open', openHandler)
}

const messageHandler = (e: MessageEvent) => {
  const newMessage = JSON.parse(e.data)
  subscribers["messages-received"].forEach(subs => subs(newMessage))
}
const openHandler = () => {
  notifySubscriberAboutStatus('ready')
}

const createChannel = () => {
  cleanUp()
  ws?.close()

  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  notifySubscriberAboutStatus('pending')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
}

let subscribers: TSubscribers = {
  "messages-received": [],
  "status-changet": []
}



export const chatAPI = {
  startChannel() {
    createChannel()
  },
  stopChannel() {
    subscribers["messages-received"] = []
    subscribers["status-changet"] = []
    cleanUp()
    ws?.close()
  },
  subscribe(eventName: TEventName ,callback: TMessagesReceivedSubscriber | TStatusChangetSubscriber) {
    // @ts-ignore
    subscribers[eventName].push(callback)
  },
  unsubscribe(eventName: TEventName ,callback: TMessagesReceivedSubscriber | TStatusChangetSubscriber) {
     // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(subs => subs !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
}


type TMessagesReceivedSubscriber = (messages: Array<IMessage>) => void
type TStatusChangetSubscriber = (status: TStatusChat) => void
type TSubscribers = {
  'messages-received': Array<TMessagesReceivedSubscriber>
  'status-changet': Array<TStatusChangetSubscriber>
}
type TEventName = 'messages-received' | 'status-changet'
