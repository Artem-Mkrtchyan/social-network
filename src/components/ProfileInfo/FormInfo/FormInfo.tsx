import React, {useEffect} from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { editMode, updateProfile } from '../../../store/actions/actionProfile';
import { IProfileEdit } from '../../../types/profileType';
import { CastomForm } from '../../common/CastomForm/CastomForm';
import { Input } from '../../common/Input/Input';
import { Textarea } from '../../common/Textarea/Textarea';
import styles from './formInfo.module.css'


export const FormInfo: React.FC = () => {
  const profile = useAppSelector(state => state.profile.data.profile);
  const errorMessage = useAppSelector(state => state.profile.error);
  const editModeFlag = useAppSelector(state => state.profile.data.editMode);

  const { handleSubmit, formState: { errors }, control } = useForm<IProfileEdit>({ mode: 'onBlur' ,
   defaultValues: {
    aboutMe: profile?.aboutMe,
    contacts: {
    facebook: profile?.contacts.facebook,
    github: profile?.contacts.github,
    instagram: profile?.contacts.instagram,
    mainLink: profile?.contacts.mainLink,
    twitter: profile?.contacts.twitter,
    vk: profile?.contacts.vk,
    website: profile?.contacts.website,
    youtube: profile?.contacts.youtube,
  },
  lookingForAJob: profile?.lookingForAJob,
  lookingForAJobDescription: profile?.lookingForAJobDescription,
  fullName: profile?.fullName,
  }});
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IProfileEdit> = (data) => {
    dispatch(updateProfile(data));
  }
  useEffect(() => dispatch(editMode()), [])

  return (
    <>
      <CastomForm errorMessage={errorMessage} title='Edit my profile' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='fullName'
          render={({ field }) => (
            <Input id='fullName' label='Fullname:' type='text' errorMessage={errors.fullName?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          name='aboutMe'
          render={({ field }) => (
            <Textarea id='aboutMe' label='About me' value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          name='lookingForAJobDescription'
          render={({ field }) => (
            <Textarea id='lookingForAJobDescription' label='My professional skills' value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          name='lookingForAJob'
          render={({ field }) => (
            <Input id='lookingForAJob' label='Looking for a job' typeInputCheckbox='chexbox' onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.facebook'
          render={({ field }) => (
            <Input id='contacts.facebook' label='Facebook' type='text' errorMessage={errors.contacts?.facebook?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.github'
          render={({ field }) => (
            <Input id='contacts.github' label='GitHub' type='text' errorMessage={errors.contacts?.github?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.instagram'
          render={({ field }) => (
            <Input id='contacts.instagram' label='Instagram' type='text' errorMessage={errors.contacts?.instagram?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.mainLink'
          render={({ field }) => (
            <Input id='contacts.mainLink' label='MainLink' type='text' errorMessage={errors.contacts?.mainLink?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.twitter'
          render={({ field }) => (
            <Input id='contacts.twitter' label='Twitter' type='text' errorMessage={errors.contacts?.twitter?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.vk'
          render={({ field }) => (
            <Input id='contacts.vk' label='VK' type='text' errorMessage={errors.contacts?.vk?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.website'
          render={({ field }) => (
            <Input id='contacts.website' label='Website' type='text' errorMessage={errors.contacts?.website?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: (/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi),
              message: 'Invalid url format'
            }
          }}
          name='contacts.youtube'
          render={({ field }) => (
            <Input id='contacts.youtube' label='Youtube' type='text' errorMessage={errors.contacts?.youtube?.message} value={field.value} onChange={(e) => field.onChange(e)} />
          )} />
      </CastomForm>
            {editModeFlag && <p className={styles.editSuccess}>{`Your profile has been successfully updated.`}</p>}
    </>
  )
}
