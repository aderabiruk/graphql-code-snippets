import { mergeResolvers } from '@graphql-tools/merge'

import UserResolver from './iam/User'

export const resolvers = [
  UserResolver
]

export default mergeResolvers(resolvers)