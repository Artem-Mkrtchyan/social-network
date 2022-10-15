import React, { useEffect, useRef, useState } from 'react';
import { Message } from '../../components/Messages/Message/Message';
import { Messages } from '../../components/Messages/Messages';
import styles from './chat.module.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { clearMessageChat, getMessage, sendMessage, stopMessage } from '../../store/actions/actionChat';
import { IMessage } from '../../types/chatType';
import { selectors } from '../../store/selectors';


interface IMessageSend {
  message: string
}


export const Chat: React.FC = () => {

  const dispatch = useAppDispatch()
  const {data, status} = useAppSelector(selectors.chatState)
  const messagesRef = useRef<HTMLDivElement>(null)
  const [isActivScroll, setIsActiveScroll] = useState(true)

  const { reset, handleSubmit, register } = useForm<IMessageSend>({ mode: 'onBlur' });
  const onSubmitForm: SubmitHandler<IMessageSend> = (data) => {
    dispatch(sendMessage(data.message))
    reset()
  }

  const scrollHandler = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const elem = e.currentTarget
    if(Math.abs((elem.scrollHeight - elem.scrollTop) - elem.clientHeight) < 300) {
      !isActivScroll && setIsActiveScroll(true)
    } else {
      isActivScroll && setIsActiveScroll(false)
    }
  }

  useEffect(() => {
    dispatch(getMessage())

    return () => {
      dispatch(stopMessage())
      dispatch(clearMessageChat())
    }
  }, [])

  useEffect(() => {
    isActivScroll && messagesRef.current?.scrollIntoView({block: 'end', behavior: 'smooth'})
  }, [data])


  return (
    <section className={styles.sectionChat}>
      <Messages scrollHandler={scrollHandler}>
        {data.map((data: IMessage, i) => <Message key={i} {...data} />)}
        <div ref={messagesRef}/>
      </Messages>
      <form className={styles.formMessage} onSubmit={handleSubmit(onSubmitForm)}>
        <textarea className={styles.textarea} {...register('message')} />
        <button disabled={status === 'pending'} className={styles.formButton}>Submit</button>
      </form>
    </section>
  )
}
