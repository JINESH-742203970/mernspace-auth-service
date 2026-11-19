/* eslint-disable no-console */
import request from 'supertest'
import app from '../../app.js'
import type { DataSource } from 'typeorm'
import { AppDataSource } from '../../data-source.js'
import { truncateTables } from '../utils/index.js'
import { User } from '../../entities/User.js'

describe('POST/auth/register', () => {
  describe('Given all fields', () => {
    let connection: DataSource
    //Database should be clean before running any test to avoid the conflict betweeen the other test data
    beforeAll(async () => {
      connection = await AppDataSource.initialize()
    })
    beforeEach(async () => {
      //Database truncate
      await truncateTables(connection)
    })
    afterAll(async () => {
      await connection.destroy()
    })
    // it('should return valid json response', async () => {
    //   //Arrange
    //   const userData = {
    //     firstName: 'Rakesh',
    //     lastName: 'K',
    //     email: 'rakesh@mern.space',
    //     password: 'secret',
    //   }
    //   //Act
    //   const response = await request(app).post('/auth/register').send(userData)
    //   //Assert application/json
    //   expect(response.headers).toEqual(expect.stringContaining('json'))
    // })

    it('should persist the user in the database', async () => {
      const userData = {
        firstName: 'Rakesh',
        lastName: 'K',
        age: 21,
        email: 'rakesh@mern.space',
        password: 'secret',
      }

      const response = await request(app).post('/auth/register').send(userData)

      console.log('STATUS:', response.status)
      console.log('BODY:', response.body)

      expect(response.status).toBe(201)

      const userRepository = connection.getRepository(User)
      const users = await userRepository.find()

      expect(users).toHaveLength(1)
      expect(users[0]?.firstName).toBe(userData.firstName)
      expect(users[0]?.lastName).toBe(userData.lastName)
      expect(users[0]?.age).toBe(userData.age)
      expect(users[0]?.email).toBe(userData.email)
      expect(users[0]?.password).toBe(userData.password)
    })
  })
  describe('Fields are missing', () => {})
})
