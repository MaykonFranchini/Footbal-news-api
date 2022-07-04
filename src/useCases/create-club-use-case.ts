import { ClubsRepository } from "../repositories/clubs-repository";

interface CreateClubUseCaseRequest {
  name: string;
  logo_url: string;
  location: string;
  source_url: string;
}
export class CreateClubUseCase {
  constructor(private clubsRepository: ClubsRepository) {}

  async execute(request: CreateClubUseCaseRequest) {
    const { name, source_url, logo_url, location} = request;
    this.clubsRepository.create({
      name,
      source_url,
      logo_url,
      location
    });
  }
}