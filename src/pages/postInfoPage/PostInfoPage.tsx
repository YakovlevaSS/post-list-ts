import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import S from './postInfoPage.module.css';
import BackButton from '../../components/backButton/BackButton';
import Loader from '../../components/loader/loader';
import { getPostByIdApi } from '../../API/postsApi';
import { IPost } from '../../interface/postInterface';
import ErrorComp from '../../components/errorComp/ErrorComp';


const PostInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>('');


  useEffect(() => {
    const fetchDataPosts = async () => {
      if (id !== undefined) {
        try {
          setIsLoading(true);
          const response = await getPostByIdApi(parseInt(id, 10));
          if (response) {
            setPost(response);
          }
        } catch (error) {
          if (error instanceof Error) {
            setTextError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchDataPosts();
  }, []);

  if (textError) {
    return (
      <div className={ S.wrap }>
        <ErrorComp textError={ textError } />
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
