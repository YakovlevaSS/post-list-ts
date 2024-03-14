import { NavLink } from 'react-router-dom';

import S from './postList.module.css';
import PostItem from '../postItem/PostItem';
import { IPost } from '../../interface/postInterface';


interface PostsListProps {
  posts: IPost[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => (
  <div className={ S.list }>
    { posts?.map((post) => (
      <NavLink key={ post.id } to={ `/post-info/${post.id}` }>
        <PostItem post={ post } />
      </NavLink>
    )) }
  </div>
);

export default PostsList;
