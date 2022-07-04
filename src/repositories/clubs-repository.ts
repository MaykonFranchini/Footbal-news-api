export interface ClubsCreateData {
  name: string;
  source_url: string;
  logo_url: string;
  location: string;
}

export interface ClubsRepository {
  create: (data: ClubsCreateData) => void;
}