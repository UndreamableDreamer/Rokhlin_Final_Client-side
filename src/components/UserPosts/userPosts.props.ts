import { Post } from '../../types/postsInterfaces';
import { UserBackendProfile } from '../../types/userInterfaces';

export interface UserPostsProps {
  posts: Post[];
  user: UserBackendProfile
}
