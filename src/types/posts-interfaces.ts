interface Author {
  id: number,
  login: string,
}

export interface Post {
  id?: number,
  title: string,
  content: string,
  imageUrl?: string,
  updatedAt: string,
  user: Author,
  tags: Tag[],
}

export interface Tag {
  id: number,
  name: string,
}
