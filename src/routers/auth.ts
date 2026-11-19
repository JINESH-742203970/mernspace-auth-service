import express from 'express'
import { AuthController } from '../controllers/AuthController.js'
import { UserService } from '../services/UserServices.js'
import { AppDataSource } from '../data-source.js'
import { User } from '../entities/User.js'

const router = express.Router()
const userRepository = AppDataSource.getRepository(User)
const userService = new UserService(userRepository)
const authController = new AuthController(userService)

// eslint-disable-next-line @typescript-eslint/unbound-method
router.post('/register', authController.register)

export default router
