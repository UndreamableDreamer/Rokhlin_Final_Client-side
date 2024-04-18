export interface BackEndUserData {
  id: number;
  login: string;
  email: string;
  avatarUrl?: string | null;
  createdAt: string;
  updatedAt: string; 
}

export interface FrontEndUserData {
  login: string,
  email?: string,
  password: string
}
