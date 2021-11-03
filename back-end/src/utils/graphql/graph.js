const { ApolloServer } = require('apollo-server-lambda');
const { MoviesAPI } = require('../class/moviesAPI');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
          moviesAPI: new MoviesAPI(),
        };
      },
});

module.exports = server