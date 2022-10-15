import React from 'react';
import styles from './app.module.css'

import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { AppRouter } from './components/AppRouter';
import { useAppSelector } from './hooks/redux';
import { Preloader } from './components/Preloader/Preloader';

function App() {
  const loading = useAppSelector(state => state.profile.loading)

  // if(loading) {
  //   return <Preloader />
  // }

  return (
    <Layout >
      <Header />
      <main className={styles.main}>
        <Nav />
        <div className={styles.content}>
          <AppRouter />
        </div>
      </main>
    </Layout>
  );
}

export default App;
