import { Club, ClubsCreateData, ClubsRepository } from "../clubs-repository";
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

  async findAll() {
    const clubs = await prisma.club.findMany()
    return clubs
  }

  async findByName(name: string) {
    const club = await prisma.club.findFirst({
      where: {
        name
      }
    })
    return club
  }
}