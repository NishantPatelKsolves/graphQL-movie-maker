import Movie from "../models/movie.model.js";

const rootValue = {
  hello() {
    return "Hello world!";
  },
  quoteOfTheDay() {
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
  },
  random() {
    return Math.random();
  },
  rollThreeDice() {
    return [1, 2, 3].map((_) => 1 + Math.floor(Math.random() * 6));
  },
  rollDice(args) {
    //  we can also write rollDice as:
    //  rollDice({ numDice, numSides }) { //  ES6 destructuring assignment
    const output = [];
    for (let i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
    }
    return output;
  },
  async listMovies() {
    const movies = await Movie.find();
    return movies;
  },
  async addMovie({ name, genre, year }) {
    const newMovie = await Movie.create({ name, genre, year });
    console.log("Movie added:", newMovie);
    const movieAdded = await Movie.findById(newMovie?._id);
    console.log("Movie fetched:", movieAdded);
    return ({ name, genre, year } = movieAdded);
  },
};
// resolver/rootValue is an exported object of functions/resolvers.

export default rootValue;

// const movies = [
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
//   { name: "John Wick", genre: "Action", year: 219 },
// ];

/**
 * building query
 * query {
  hello 
  quoteOfTheDay
  random
  rollThreeDice
   rollDice(numDice: 5, numSides: 6)
  listMovies {
    name
  }
}
 */
