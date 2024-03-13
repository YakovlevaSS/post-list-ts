/* eslint-disable import/no-extraneous-dependencies */
import Pagination from 'react-js-pagination';

import S from './pagination.module.css';


interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationComp: React.FC<PaginationProps> = ({
  page,
  setPage,
  limit,
  setLimit
}) => {
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  // Количество страниц, отображаемых в пагинации
  const pageOnPagination = 5;

  return (
    <div className={ S.container }>
      <Pagination
        activeClass="active" // класс для активной страницы
        activePage={ page }
        innerClass="pagination" // класс для обертки пагинации
        itemsCountPerPage={ limit }
        pageRangeDisplayed={ pageOnPagination }
        totalItemsCount={ 100 }
        onChange={ handlePageChange }
      />
    </div>
  );
};

export default PaginationComp;
