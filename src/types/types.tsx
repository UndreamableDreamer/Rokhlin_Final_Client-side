export interface TagInterface {
  id: number;
  name: string;
}
export interface PostInterface {
  id?: number;
  title: string;
  content: string;
  imageUrl?: string;
  updatedAt: string;
  user: {
    id: number;
    login: string;
  }
  tags: TagInterface[];
}

export interface StateInterface {
  posts: PostInterface[] | [],
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
}
