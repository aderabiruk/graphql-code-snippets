import dotenv from 'dotenv'

dotenv.config()

const configs = {
  PORT: 8000,
  LOCALE: 'en',
  API_VERSION: 'v1',
  API_NAME: 'GraphQL Api',
  HOST: 'http://localhost:8000',

  // Database Configurations
  DB_USER: process.env.DB_USER || '',
  DB_PORT: process.env.DB_PORT || '27017',
  DB_NAME: process.env.DB_NAME || 'graphql-db',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || 'localhost'
}

export default Object.assign({}, configs, process.env)
