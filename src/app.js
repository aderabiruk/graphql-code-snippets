import cors from 'cors'
import morgan from 'morgan'
import moment from 'moment'
import express from 'express'
import compression from 'compression'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './types'
import resolvers from './resolvers'
import { Error } from './helpers/errors'
import initializeDb from './helpers/database/mongoose'
import messages from './helpers/i18next/messages/en.json'

// Initialize Express
const app = express()

// Middlewares
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(cors())

// Initialize MongoDb
initializeDb()

// Initialize GraphQL
const apollo = new ApolloServer({ typeDefs, resolvers })
apollo.applyMiddleware({ app })

// Global Error Handler
app.use((error, request, response, next) => {
  if (error instanceof Error) {
    response.status(error.statusCode).json(error.payload)
  } else {
    response.status(500).json({
      timestamp: moment(),
      errors: [messages.errors.internal_server_error]
    })
  }
})

export default app
