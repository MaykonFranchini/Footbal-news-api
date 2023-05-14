import { News } from "./news-repository";

export interface ClubsCreateData {
  name: string;
  source_url: string;
  logo_url: string;
  location: string;
}

export interface Users {
  email: string;
  club_id: string;
  first_name: string;
  last_name: string;
}

export interface Club {
  id: string;
  name: string;
  source_url: string;
  logo_url: string;
  location: string;
  News?: News[];
}

export interface ClubsRepository {
  create: (data: ClubsCreateData) => void;
  findAll: () => Promise<Club[]>;
  findByName: (name: string) => Promise<Club & {News: News[]} | null>;
}