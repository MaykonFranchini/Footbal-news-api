
export interface UsersCreateData {
  email: string;
  club_id: string;
  first_name: string;
  last_name: string;
}
export interface UserData {
  id: string;
  email: string;
  club_id: string;
  first_name: string;
  last_name: string;
}

export interface UsersRepository {
  create: (data: UsersCreateData) => void;
  findByEmail: (email: string) => Promise<UserData | null>;
}