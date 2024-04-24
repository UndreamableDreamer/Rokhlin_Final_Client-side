import { Post } from '../../types/postsInterfaces';

import api from './api';

const getPosts = async (): Promise<Post[] | never> => {
  const { data } = await api.get<Post[]>('posts');
  return data;
};

export default getPosts;
