import EachPost from '../EachPost/EachPost';

import { PostsListProps } from './Posts.props';
import './posts-module.css';

const Posts = ({ posts } : PostsListProps) => {
  return (
    <article className='parent__wrapper wrapper'>
      {posts.map(post =>
        <EachPost
          id={post.id}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
          updatedAt={new Date(post.updatedAt)}
          user={post.user}
          tags={post.tags}
        />
      )}
    </article>
  );
};

export default Posts;