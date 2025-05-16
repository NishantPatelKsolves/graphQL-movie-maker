import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query { 
    hello: String    
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int] 
    rollDice(numDice: Int!, numSides: Int): [Int] 
    listMovies: [Movie]
    }

    type Movie {
    name: String
    genre: String
    year: String
    }

    type Mutation {
    hello: String 
    addMovie(name: String!, genre: String!, year: String!): Movie
    }
    `);

export default schema;
