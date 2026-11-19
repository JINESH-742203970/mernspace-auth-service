// import { AppDataSource } from "../data-source.js";
import { User } from '../entities/User.js'
import type { UserData } from '../types/index.js'
import { Repository } from 'typeorm'

export class UserService {
  constructor(private userRepository: Repository<User>) {}
  async create({ firstName, lastName, age, email, password }: UserData) {
    // const userRepository=AppDataSource.getRepository(User);
    await this.userRepository.save({
      firstName,
      lastName,
      age,
      email,
      password,
    })
  }
}
