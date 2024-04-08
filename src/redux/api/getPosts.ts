import { PostInterface } from '../../types/types';

import api from './api';

export const getPosts = async () => {
  try {
    const { data } = await api.get<PostInterface[]>('posts');
    return data;
  } catch (e: unknown) {
    throw e;
  }
};
