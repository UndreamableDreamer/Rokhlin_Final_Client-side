import formatDate from '../../helpers/formatDate';
import PostCard from '../PostCard/PostCard';

import { PostsListProps } from './Posts.props';
import './posts-module.css';

const Posts = ({ posts } : PostsListProps) => {
  return (
    <article className='parent__news news'>
      {posts.map(post =>
        <div className='news__wrapper wrapper' key={post.id}>
          <PostCard
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            updatedAt={formatDate(post.updatedAt)}
            user={post.user}
            tags={post.tags}
          />
        </div>
      )}
    </article>
  );
};

export default Posts;
