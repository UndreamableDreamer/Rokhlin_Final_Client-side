export interface Tag {
  id: number;
  name: string;
}
export interface PostInterface {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  updatedAt: string;
  user: {
    id: number;
    login: string;
  }
  tags: Tag[];
}

export interface PostCardDataInterface {
  title: string;
  content: string;
  imageUrl?: string;
  updatedAt: string;
  user: {
    id: number;
    login: string;
  }
  tags: Tag[];
}

export interface StateInterface {
  posts: PostInterface[] | [],
  isLoading: boolean,
  error: string | null,
}

export interface PostAction {
  type: string,
  payload?: PostInterface[]
  error?: string,
}

export interface StoreInterface {
  posts: StateInterface,
}