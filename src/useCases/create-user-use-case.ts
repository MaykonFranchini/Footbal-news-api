import { UsersRepository } from "../repositories/users-repository"

export interface UserCreateRequest {
  email: string;
  club_id: string;
  first_name: string;
  last_name: string;
}

export class CreateUserUsecase {
  constructor (private usersRepository: UsersRepository) {}

  async execute ({first_name, last_name, email, club_id}: UserCreateRequest) {
    const userAlreadyExist = await this.usersRepository.findByEmail(email)
    if (userAlreadyExist) {
      throw new Error("User already exist")
    }
    this.usersRepository.create({
      first_name,
      last_name,
      email, 
      club_id
    })
  }
}