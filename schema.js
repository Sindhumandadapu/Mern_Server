const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!,
  name: String!,
  email: String!,
  password: String!
}

type Query {
  getUser(id: ID!): User,
  getUsers: [User],
}

input createUserInput {
  name: String!,
  email: String!,
  password: String!
}

type Mutation {
  createUser(input: createUserInput!): User,
  changepass(id: ID!, password: String!): User,
}
`;

module.exports = typeDefs;