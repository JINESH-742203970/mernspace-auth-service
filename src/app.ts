/* eslint-disable @typescript-eslint/require-await */
import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express'
import logger from './config/logger.js'
import type { HttpError } from 'http-errors'
import createHttpError from 'http-errors'
import authRouter from './routers/auth.js'
import 'reflect-metadata'
const app = express()
app.use(express.json())
app.get('/error', (req, res) => {
  const err = createHttpError(401, 'You can not access this route')
  throw err
  res.send('Welcome to auth service')
})

app.get('/', async (req, res) => {
  res.send('Welcome to Auth Service')
})

app.use('/auth', authRouter)

//global error Handler:It will come in the end of middleware chain
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message)
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: '',
        location: '',
      },
    ],
  })
})
export default app

//In this case app will crash
// app.get('/', async (req, res) => {
//   const err=createHttpError(401,'You can not access this route');
//   throw err;
//   res.send('Welcome to auth service')
// })

//Solution for async scenario error handling
// app.get('/', async (req, res,next) => {
//    const err=createHttpError(401,'You can not access this route');
//    next(err);
//   //  res.send('Welcome to auth service')
//  })
