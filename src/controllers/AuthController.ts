/* eslint-disable no-console */
import type { Response } from 'express'
import type { RegisterUserRequest } from '../types/index.js'
import { UserService } from '../services/UserServices.js'

// export class AuthController {
//  async  register(req: RegisterUserRequest, res: Response) {
//     const {firstName,lastName,email,password}=req.body;
//     const userRepository=AppDataSource.getRepository(User);
//     await userRepository.save({firstName,lastName,email,password});
//     res.status(201).json();
//   }
// }

export class AuthController {
  constructor(private userService: UserService) {}
  async register(req: RegisterUserRequest, res: Response) {
    try {
      const { firstName, lastName, age, email, password } = req.body

      await this.userService.create({
        firstName,
        lastName,
        age,
        email,
        password,
      })
      return res.status(201).json({
        message: 'User registered successfully',
      })
    } catch (error) {
      console.error('Registration error:', error)

      return res.status(500).json({
        message: 'Registration failed',
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }
}
