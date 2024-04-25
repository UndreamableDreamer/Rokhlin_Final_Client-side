import { UserProfileWithPosts } from '../../types/userInterfaces';

import api from './api';

const getAuthorPosts = async ( author: string ): Promise<UserProfileWithPosts | never> => {
  const { data } = await api.get<UserProfileWithPosts>(`user/${author}`);
  return data;
};

export default getAuthorPosts;
