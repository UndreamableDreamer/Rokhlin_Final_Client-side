import { UserProfileWithPosts } from '../../types/userInterfaces';

import api from './api';

const getUserPosts = async (): Promise<UserProfileWithPosts | never> => {
  const { data } = await api.get<UserProfileWithPosts>('user');
  return data;
};

export default getUserPosts;
