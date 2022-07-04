import { ClubsCreateData, ClubsRepository } from "../clubs-repository";
import { prisma } from '../../prisma';

export class PrismaClubsRepository implements ClubsRepository {
  async create({name, source_url, logo_url, location}: ClubsCreateData) {
    await prisma.club.create({
      data: {
        name,
        source_url,
        logo_url,
        location
      }
    })
  }
}