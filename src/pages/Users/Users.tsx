import React, { useEffect } from 'react';
import Pagination from '../../components/common/Pagination/Pagination';
import { UserItem } from '../../components/UserList/userItem/UserItem';
import { UserList } from '../../components/UserList/UserList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsers } from '../../store/actions/actionsUsers';
import {Preloader} from '../../components/Preloader/Preloader'
import styles from './users.module.css'

export const Users: React.FC = () => {
  const dispatch = useAppDispatch()
  const { currentPage, pageSize, items, totalCount, } = useAppSelector(state => state.users.data);
  const { loading } = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize))
  }, [currentPage])


  const setCurrentPage = (page: number) => {
    dispatch(getUsers(page, pageSize));

  }

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
        {items.map(user => <UserItem key={user.id} {...user} />)}
      </UserList>
    </section>
  )
}
