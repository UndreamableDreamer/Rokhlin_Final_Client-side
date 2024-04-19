import { Post } from '../../types/posts-interfaces';

import api from './api';

const getPosts = async () => {
  const { data } = await api.get<Post[]>('posts');
  return data;
};

export default getPosts;
