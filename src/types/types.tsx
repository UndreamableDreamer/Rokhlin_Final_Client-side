interface Tag {
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