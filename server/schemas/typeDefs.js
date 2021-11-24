const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Book {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Auth {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(tech1: String!, tech2: String!): Auth
    addUser(_id: String!, techNum: Int!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
