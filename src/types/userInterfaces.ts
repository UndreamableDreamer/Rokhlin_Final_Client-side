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
