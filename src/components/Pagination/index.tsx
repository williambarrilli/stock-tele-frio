import { useState } from 'react';
import styles from './styles.module.scss';
import objStr from 'obj-str';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${objStr({
            [styles['page-number-button']]: true,
            [styles.active]: currentPage === i,
          })}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }
    return pageNumbers;
  };

  return <ul className={styles.container}>{renderPageNumbers()}</ul>;
};

export default Pagination;
