import { ClubsRepository } from "../repositories/clubs-repository";

export class ListClubsUseCase {
  constructor(private clubsRepository: ClubsRepository) {}

  async execute() {
    const clubs = this.clubsRepository.findAll();
    return clubs;
  }
}