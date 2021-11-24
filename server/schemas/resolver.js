const { User } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async () => {
    },
  },
  Mutation: {
    addUser: async () => {
    },
    login: async () => {
    },
    saveBook: async () => {

    },
    removeBook: async () => {

    }
  },
};

module.exports = resolvers;
