import request from 'supertest'
import app from '../../app.js'

describe.skip('POST/auth/register', () => {
  describe('Given all fields', () => {
    it('should return valid json response', async () => {
      //Arrange
      const userData = {
        firstName: 'Rakesh',
        lastName: 'K',
        email: 'rakesh@mern.space',
        password: 'secret',
      }
      //Act
      const response = await request(app).post('/auth/register').send(userData)
      //Assert application/json
      expect(response.headers).toEqual(expect.stringContaining('json'))
    })
    it('should persist the user in the database', async () => {
      //Arrange
      const userData = {
        firstName: 'Rakesh',
        lastName: 'K',
        email: 'rakesh@mern.space',
        password: 'secret',
      }
      //Act
      const response = await request(app).post('/auth/register').send(userData)
      //Assert application/json
      expect(response.headers).toEqual(expect.stringContaining('json'))
    })
  })
  describe('Fields are missing', () => {})
})
