//TODO Block for news with some styles ( prob )
//TODO News receive func
import { FC } from 'react';

import { PostInterface } from '../types/types'

import './Post.css'

interface PostsListProps {
  posts: PostInterface[];
}

const Posts: FC<PostsListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => //* Пробегаемся по массиву
        <div className='post' key={post.id}> //* Тут указываем ключ, чтобы у нас строилось что-то относительно наших данных. Считай, что это своеобразный конструктор.
          <h2 className='post__title'>{post.title}</h2>
          <p className='post__content'>{post.content}</p>
          <div className='post__tags tag-array'>Теги:
            {post.tags.map(tag => (
              <p className='tag-array__element' key={tag.id}>{tag.name}</p> //* Т.к. теги приходят массивом, нам тоже нужно по нему пробежаться и создать объект для каждого тега. 
            ))}
          </div>
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