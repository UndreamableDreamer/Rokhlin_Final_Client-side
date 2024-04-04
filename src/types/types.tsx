export interface TagInterface {
  id: number,
  name: string,
}

interface AuthorInterface {
  id: number,
  login: string,
}

export interface PostInterface {
  id?: number,
  title: string,
  content: string,
  imageUrl?: string,
  updatedAt: string,
  user: AuthorInterface,
  tags: TagInterface[],
}

export interface StateInterface {
  posts: PostInterface[],
  isLoading: boolean,
  error: string | null,
}

export interface PostActionInterface {
  type: string,
  payload?: PostInterface[]
  error?: string,
}

export interface ErrorMessageInterface {
  error: string | null,
  severity: 'info'| 'error',
}
