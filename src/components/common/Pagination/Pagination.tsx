import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import styles from './pagination.module.css'

type TProps = {
  onPageChange: (num: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className: string
}

const Pagination: React.FC<TProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames({[styles.paginationContainer] : true}, { [className]: className })}
    >
      <li
        className={classnames({[styles.paginationItem]: true}, {
          [styles.disabled]: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={classnames({[styles.arrow]: true, [styles.left]: true})} />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS || typeof pageNumber === 'string') {
          return <li key={pageNumber} className={classnames({[styles.paginationItem]: true, [styles.dots]: true})}>&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={classnames({[styles.paginationItem]: true}, {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames({[styles.paginationItem]: true}, {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={classnames({[styles.arrow]: true, [styles.right]: true})} />
      </li>
    </ul>
  );
};

export default Pagination;
