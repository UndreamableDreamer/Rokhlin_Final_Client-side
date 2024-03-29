export interface Tag {
  id: number;
  name: string;
}

export interface PostInterface {
  id: number;
  title: string;
  content: string;
  imageUrl?: string | null;
  updatedAt: string;
  user: {
    id: number;
    login: string;
  }
  tags: Tag[];
}
export interface PayloadInterface {
  posts: PostInterface[],
  isLoading: boolean,
  error: null,
}
export interface StoreInterface {
  posts: PayloadInterface,
}

export interface ActionInterface {
  type: string,
  payload: PayloadInterface;
}