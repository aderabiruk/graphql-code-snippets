import mongoose from 'mongoose'
import config from '../../config'
import logger from '../loggers/winston'

export default () => {
  const dbHost = config.DB_HOST
  const dbPort = config.DB_PORT
  const dbName = config.DB_NAME

  const dbUrl = process.env.MONGODB_URI || `mongodb://${dbHost}:${dbPort}/${dbName}`

  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.on('connected', () => {
    logger.info(`Database connection established with ${dbUrl}`)
  })

  mongoose.connection.on('error', (error) => {
    logger.info(`Database connection error: ${error}`)
  })

  mongoose.connection.on('disconnected', () => {
    logger.info('Database connection terminated.')
  })
}
