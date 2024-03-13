import S from './postItem.module.css';


interface PostItemProps {
  post: {
    title: string;
    body: string;
  };
}

const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <div className={ S.item }>
    <p className={ S.textBig }>{ post.title }</p>
    <p className={ S.text }>{ post.body }</p>
  </div>
);

export default PostItem;
