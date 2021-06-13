import moment from 'moment'
import { ApolloError } from 'apollo-server-express'

import messages from '../i18next/messages/en.json'

export class Error {
  constructor (statusCode, errors) {
    this.statusCode = statusCode
    this.payload = {
      timestamp: moment(),
      errors: errors
    }
  }
}

export class BadRequestError extends Error {
  constructor (errors) {
    super(400, errors)
  }
}

export class ApolloBadRequestError extends ApolloError {
  constructor (errors) {
    super(errors, 400)

    Object.defineProperty(this, 'name', { value: 'ApolloBadRequestError' })
  }
}

export class UnauthorizedError extends Error {
  constructor () {
    super(401, [
      messages.UNAUTHORIZED_ERROR
    ])
  }
}

export class ForbiddenError extends Error {
  constructor () {
    super(403, [
      messages.FORBIDDEN_ERROR
    ])
  }
}

export class NotFoundError extends Error {
  constructor (error) {
    super(404, [
      error
    ])
  }
}

export class InternalServerError extends Error {
  constructor (error) {
    super(500, [
      error ? `Internal Server Error: ${error}` : messages.errors.internal_server_error
    ])
  }
}

export class ApolloInternalServerError extends ApolloError {
  constructor (error) {
    super(
      [ error ? `Internal Server Error: ${error}` : messages.errors.internal_server_error ], 
      500
    )

    Object.defineProperty(this, 'name', { value: 'ApolloInternalServerError' })
  }
}

export class NotImplementedError extends Error {
  constructor (error) {
    super(501, [
      error ? `Not Implemented: ${error}` : messages.errors.not_implemented_error
    ])
  }
}

export class ServiceUnavailableError extends Error {
  constructor (error) {
    super(502, [
      error ? `Service Unavailable: ${error}` : messages.errors.service_unavailable
    ])
  }
}
