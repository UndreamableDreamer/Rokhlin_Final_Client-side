export interface BackEndUserData {
  id: number,
  login: string,
  email: string,
  avatarUrl?: string | null,
  createdAt: string,
  updatedAt: string
}

export interface FrontEndUserData {
  [k: string]: FormDataEntryValue
}
