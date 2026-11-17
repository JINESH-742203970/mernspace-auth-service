import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Config } from './config/index.js'
import { User } from './entities/User.js'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: Config.DB_HOST,
  port: Config.DB_PORT,
  username: Config.DB_USERNAME,
  password: Config.DB_PASSWORD,
  database: Config.DB_NAME,
  synchronize: Config.NODE_ENV === 'test' || Config.NODE_ENV === 'dev',
  logging: false,
  //Database Table
  entities: [User],
  migrations: [],
  subscribers: [],
})

//we need to synchronize:false in production

//synchronize true properly sync entity with database
