import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CastomForm } from '../../components/common/CastomForm/CastomForm';
import { Input } from '../../components/common/Input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logIn } from '../../store/actions/actionAuth';
import { IloginForm } from '../../types/types';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const navigate = useNavigate();
  const { reset, handleSubmit, control, formState: {errors }} = useForm<IloginForm>({mode: 'onBlur', defaultValues: {email: '', password: ''}});

  const onSubmitForm: SubmitHandler<IloginForm> = (data) => {
    dispatch(logIn(data))
    reset()
  }

  isAuth && navigate('/')
  return (
    <CastomForm  title='Sing In' onSubmit={handleSubmit(onSubmitForm)}>
    <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /.+@.+\..+/i,
              message: 'Email is not correct'
            }
          }}
          name='email'
          render={({ field }) => (
            <Input id='email' label='Email:' type='email' errorMessage={errors.email?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />

    <Controller
          control={control}
          rules={{
            required: 'Password is required',
          }}
          name='password'
          render={({ field }) => (
            <Input id='password' label='Password:' type='password' errorMessage={errors.password?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
    </CastomForm>
  )
}
