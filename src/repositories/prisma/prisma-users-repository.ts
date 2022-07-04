import { prisma } from "../../prisma";
import { UsersCreateData, UsersRepository } from "../users-repository";

export class PrismaUsersrepository implements UsersRepository {
  async create({first_name, last_name, email, club_id}: UsersCreateData) {
    await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        club_id
      }
    })
  }

  async findByEmail(email: string) {
    return await prisma.user.findFirst({
      where: {
        email
      }
    })
  }
}