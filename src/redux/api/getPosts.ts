import { PostInterface } from '../../types/types';

import api from './api';

export const getPosts = async () => {
  const { data } = await api.get<PostInterface[]>('posts');
  return data;
};
