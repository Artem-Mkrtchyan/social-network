import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './addMessageForm.module.css'


interface IMessage {
  message: string
}

export const AddMessageForm: React.FC = () => {

  const { reset, handleSubmit, register} = useForm<IMessage>({ mode: 'onBlur', defaultValues: { message: '' }});

  const onSubmitForm: SubmitHandler<IMessage> = (data) => {
    console.log(data)
    reset()
  }


  return (
    <form className={styles.from} onSubmit={handleSubmit(onSubmitForm)}>
      <textarea {...register('message')} className={styles.entryField} placeholder='Write a message...'/>
      <button>Submit</button>
    </form>
  )
}
