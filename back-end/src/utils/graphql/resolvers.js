const getFavorites = require('../../helpers/getFavorites');
const toggleFavorite = require('../../helpers/toggleFavorite');

const resolvers = {
  Query: {
    movie: async (_, {id}, {dataSources}) => {
        return await dataSources.moviesAPI.getMovie(id);
    },
    movies: async (_, {title}, {dataSources}) => {
        return await dataSources.moviesAPI.getMovies(title);
    },
    favorites: async (_, {userId}) => {
        return await getFavorites(userId);
    }
  },
  Mutation: {
    // addFavorite: async (_, { movieId, userId, title }, ) => {
    //   const toggleFavorite = await addFavorite({ movieId, userId, title })
    //   return toggleFavorite
    // },

    toggleFavorite: async (_, { movieId, userId, title }, ) => {
      return await toggleFavorite({ movieId, userId, title });
    },
  },
};

module.exports = { resolvers };