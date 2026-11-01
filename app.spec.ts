 
 
 
import app from './src/app.js'
import { calculateDiscount } from './src/utill.js'
import request from 'supertest'

 
describe('App', () => {
   
  it('should return correct discount amount', () => {
    const discount = calculateDiscount(100, 10)
     
    expect(discount).toBe(10)
  })

  it('should return 200', async () => {
     
    const response = await request(app).get('/')
     
    expect(response.statusCode).toBe(200)
  })
})
