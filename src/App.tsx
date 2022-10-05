import React from 'react';
import styles from './app.module.css'

import { Routes, Route } from 'react-router-dom'
import { Message } from './pages/Message/Message';
import { ProfilePage } from './pages/Profile/ProfilePage';
import { Users } from './pages/Users/Users';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Layout } from './components/Layout/Layout';
import { FormInfo } from './components/ProfileInfo/FormInfo/FormInfo';
import { Login } from './pages/Login/Login';


function App() {
  return (
    <Layout >
      <Header />
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
          <Routes>
            <Route path='/' element={<ProfilePage />} />
            <Route path='/messages/' element={<Message />} />
            <Route path='/users/' element={<Users />} />
            <Route path='/edit/' element={<FormInfo />} />
            <Route path='/login/' element={<Login />} />
          </Routes>
        </div>
      </main>
    </Layout>
  );
}

export default App;
