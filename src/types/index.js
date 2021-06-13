import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    status: String!
    password: String!    
  }

  type Query {
    users: [User]
    user(id: String!): User
  }
`

export default typeDefs
