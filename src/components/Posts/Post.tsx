import PostTags from '../PostTags/PostTags';

import { PostsListProps } from './Post.props';
import './Post.css'


const Posts = ({ posts } : PostsListProps) => {
  return (
    <div className='post-wrapper'>
      {posts.map(post =>
        <div className='post-wrapper__inside post' key={post.id}>
          <h2 className='post__title'>{post.title}</h2>
          <p className='post__content'>{post.content}</p>
          <PostTags tags={post.tags} />
          <div className='post__meta meta'>
            <p className='meta__author'>Автор: {post.user.login}</p>
            <p className='meta__created-at'>Создан: {post.updatedAt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;