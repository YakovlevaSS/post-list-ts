import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import S from './postInfoPage.module.css';
import BackButton from '../../components/backButton/BackButton';
import Loader from '../../components/loader/loader';
import { getPostByIdApi } from '../../API/postsApi';


interface Post {
  title: string;
  body: string;
}

const PostInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>('');

  const fetchDataPosts = async () => {
    if (id !== undefined) {
      try {
        setIsLoading(true);
        const response = await getPostByIdApi(parseInt(id, 10));
        if (response) {
          setPost(response);
        }
      } catch (error: any) {
        setTextError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchDataPosts();
  }, []);

  if (textError) {
    return (
      <div className={ S.wrap }>
        <div className={ S.errorWrap }>
          <p className={ S.errorText }>Что-то пошло не так,</p>
          <p className={ S.errorText }>попробуйте повторить запрос позже!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={ S.wrap }>
      <div className={ S.card }>
        <BackButton />
        <div className={ S.content }>
          { isLoading ? (
            <Loader />
          ) : (
            <>
              <p className={ S.textBig }>{ post?.title }</p>
              <p className={ S.textLabel }>Содержание поста</p>
              <p className={ S.text }>{ post?.body }</p>
            </>
          ) }
        </div>
      </div>
    </div>
  );
};

export default PostInfoPage;
