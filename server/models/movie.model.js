import { Schema, model } from "mongoose";
const MovieSchema = new Schema({
  name: String,
  genre: String,
  year: String,
});

const Movie = new model("Movie", MovieSchema);
export default Movie;
