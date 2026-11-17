import { config } from 'dotenv'
import path from 'node:path'

config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
})

const { PORT, NODE_ENV, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } =
  process.env

export const Config = {
  PORT: Number(PORT || 5501),
  NODE_ENV: NODE_ENV || 'development',

  DB_HOST: DB_HOST || 'localhost',
  DB_PORT: Number(DB_PORT || 5432),
  DB_USERNAME: DB_USERNAME || 'postgres',
  DB_PASSWORD: DB_PASSWORD || '',
  DB_NAME: DB_NAME || 'postgres',
}
