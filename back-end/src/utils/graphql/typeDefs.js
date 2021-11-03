const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Genres {
    id:Int!,
    name: String
  }

  type Movie {
    id:Int!,
    title:String!,
    overview:String,
    release_date:String
    genres: [Genres],
  }

  type Favorite {
    userId: String!,
    movieId: Int!,
    title: String,
    status: Boolean!
  }

  type Query {
    movie(id: Int!): Movie
    movies(title: String!): [Movie]
    getFav(userId: String!, movieId: Int!): Favorite
    favorites(userId: String!): [Favorite]
  }
  type Mutation {
    toggleFavorite(movieId: Int!, userId: String!, title: String!): Favorite
  }
`;

module.exports = { typeDefs };