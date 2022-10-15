import React, { useEffect } from 'react';
import Pagination from '../../components/common/Pagination/Pagination';
import { UserItem } from '../../components/UserList/userItem/UserItem';
import { UserList } from '../../components/UserList/UserList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { defaultCurrentPage, followUser, getUsers } from '../../store/actions/actionsUsers';
import {Preloader} from '../../components/Preloader/Preloader'
import styles from './users.module.css'
import { selectors } from '../../store/selectors';

export const Users: React.FC = () => {
  const dispatch = useAppDispatch()
  const { currentPage, pageSize, items, totalCount, followingIsProgress} = useAppSelector(selectors.usersData);
  const { loading } = useAppSelector(selectors.usersState);

  const setCurrentPage = (page: number) => {
    dispatch(getUsers(page, pageSize));
  }

  const subscribeUser = (id: number ,follow: boolean) => {
    dispatch(followUser(id, follow))
  }

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize))
  }, [currentPage])

  //update currentPage of state
  useEffect(() => {
    return () => {
      dispatch(defaultCurrentPage(1))
    }
  }, [])

  return (
    <section className={styles.sectionUser}>
      <Pagination
        className={styles.paginationWrap}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      {loading && <Preloader />}
      <UserList>
        {items.map(user => <UserItem disabled={followingIsProgress.some(id => id === user.id)} key={user.id} subscribe={subscribeUser} props={user} />)}
      </UserList>
    </section>
  )
}
