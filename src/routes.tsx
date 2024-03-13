import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import PostInfoPage from './pages/postInfoPage/PostInfoPage';
import MainPage from './pages/mainPage/MainPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';


const AppRoutes = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <Routes>
      <Route
        path="/"
        element={ (
          <MainPage
            limit={ limit }
            page={ page }
            setLimit={ setLimit }
            setPage={ setPage }
          />
        ) }
      />
      <Route element={ <PostInfoPage /> } path="/post-info/:id" />
      <Route element={ <NotFoundPage /> } path="*" />
    </Routes>
  );
};

export default AppRoutes;
