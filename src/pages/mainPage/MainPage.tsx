import { useState, useEffect } from 'react';

import S from './mainPage.module.css';
import PostsList from '../../components/postsList/PostsList';
import PaginationComp from '../../components/pagination/PaginationComp';
import Loader from '../../components/loader/loader';
import EmptyList from '../../components/emptyList/EmptyList';
import { getPostsListApi } from '../../API/postsApi';
import { IPost } from '../../interface/postInterface';


interface MainPageProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const MainPage: React.FC<MainPageProps> = ({
  page,
  setPage,
  limit,
  setLimit
}) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>('');

  useEffect(() => {
    const fetchDataPosts = async () => {
      try {
        setIsLoading(true);
        const response = await getPostsListApi(page, limit);
        if (response) {
          setPosts(response);
        }
      } catch (error) {
        if (error instanceof Error) {
          setTextError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };


    fetchDataPosts();
  }, [page, limit]);

  if (isLoading) {
    return (
      <div className={ S.wrap }>
        <Loader />
      </div>
    );
  }

  if (textError) {
    return (
      <div className={ S.errorWrap }>
        <p className={ S.errorText }>Что-то пошло не так,</p>
        <p className={ S.errorText }>попробуйте повторить запрос позже!</p>
        <p className={ S.errorText }>{ textError }</p>
      </div>
    );
  }

  if (posts?.length === 0) {
    return (
      <div className={ S.wrap }>
        <EmptyList />
      </div>
    );
  }

  return (
    <div className={ S.wrap }>
      <PostsList posts={ posts } />
      <PaginationComp
        limit={ limit }
        page={ page }
        setLimit={ setLimit }
        setPage={ setPage }
      />
    </div>
  );
};

export default MainPage;
