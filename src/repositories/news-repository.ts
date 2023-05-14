export interface NewsCreateData {
  title  : string;
  link?: string | null;
  source_name: string;
  source_img: string;
  club_id: string;
  image_url?: string | null;
}

export interface News {
  id: string;
  title: string;
  link?: string | null;
  source_name: string;
  source_img: string;
  club_id: string;
  image_url?: string | null;
}

export interface NewsRepository {
  create: (data: NewsCreateData) => void;
  findAll: () => Promise<News[]>;
  deleteAll: () => void;
  findByClub: (club_id: string) => Promise<News[] | null>;
}