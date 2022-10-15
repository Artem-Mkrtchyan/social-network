import React, { memo } from 'react';
import { useAppSelector } from '../hooks/redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE, PROFILE_OWNER, REGISTRATION } from '../utils/constants';
import { randomIndex } from '../utils/generateRandomIndex';



export const AppRouter = React.memo (() => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  return isAuth ?
    (
      <Routes>
        {privateRoutes.map(({ path, Element }) => <Route key={randomIndex()} path={path} element={<Element />} />)}
        <Route path='*' element={<Navigate to={PROFILE_OWNER} replace />} />
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({ path, Element }) => <Route key={randomIndex()} path={path} element={<Element />} />)}
        <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
      </Routes>
    )
})
