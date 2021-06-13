import { ApolloError } from 'apollo-server-express'

import UserDal from '../../dal/User'
import { ApolloInternalServerError } from '../../helpers/errors'

export default {
  Query: {
    async users(root, { query }) {
      try {
        const users = await UserDal.findMany(query)
        return users
      } catch (error) {
        throw new ApolloInternalServerError(error)
      }
    },
    async user(root, { id }) {
      const user = await UserDal.findById(id)
      return user
    }
  }
}