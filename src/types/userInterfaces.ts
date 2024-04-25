import { Post } from './postsInterfaces';

export interface UserBackendProfile {
  id: number,
  login: string,
  email: string,
  avatarUrl?: string | null,
  createdAt: string,
  updatedAt: string
}

export interface UserCredentials {
  [k: string]: FormDataEntryValue
}

export interface UserProfileWithPosts {
  user: UserBackendProfile
  posts: Post[]
}
