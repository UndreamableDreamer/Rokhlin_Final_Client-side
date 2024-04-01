export interface Tag {
  id: number;
  name: string;
}
export interface PostInterface {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  updatedAt: string | Date;
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
export interface PostAction {
  type: string,
}
