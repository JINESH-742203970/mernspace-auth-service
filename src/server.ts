import app from './app.js'
import { Config } from './config/index.js'
import logger from './config/logger.js'

const startServer = () => {
  const PORT = Config.PORT
  try {
    // app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
    app.listen(PORT, () => {
      logger.error('testing error')
      logger.info('listening on port', { port: PORT })
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    process.exit(1)
  }
}
startServer()
