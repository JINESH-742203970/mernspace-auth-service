import winston from 'winston'
import { Config } from './index.js'
const logger = winston.createLogger({
  level: 'info',
  defaultMeta: {
    serviceName: 'auth-service',
  },
  transports: [
    new winston.transports.File({
      level: 'info',
      dirname: 'logs',
      filename: 'combined.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === 'test',
    }),
    new winston.transports.File({
      level: 'error',
      dirname: 'logs',
      filename: 'error.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: Config.NODE_ENV === 'test',
    }),
    new winston.transports.Console({
      level: 'info',
      // format:winston.format.json(),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      // silent:true
      silent: Config.NODE_ENV === 'test',
    }),
  ],
})
export default logger

//now log will visible up to info level(error,warn,info)

//we need to make dynamic fron .env for level field
