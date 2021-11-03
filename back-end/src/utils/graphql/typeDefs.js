const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Movie {
    id:Int!,
    title:String!,
    overview:String,
    genre: [Genre],
  }

  type Genre {
    id:Int!,
    name: String
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
    favorites(userId: String!): [Favorite]
  }
  type Mutation {
    toggleFavorite(movieId: Int!, userId: String!, title: String!): Favorite
  }
`;

module.exports = { typeDefs };