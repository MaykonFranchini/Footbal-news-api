import { latestsNews } from "../getLatestsNews";
import { ClubsRepository } from "../repositories/clubs-repository";

interface ListClubRequest {
  club: string;
}

export class LatestsNewsUseCase {
  constructor(private clubsRepository: ClubsRepository) {}

  async execute(request :ListClubRequest) {
    const { club } = request;
    const clubData = await this.clubsRepository.findByName(club);
   
      return clubData!.News
  }
}