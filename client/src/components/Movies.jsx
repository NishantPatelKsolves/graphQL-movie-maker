import { gql, useQuery } from "@apollo/client";
import SingleMovie from "./SingleMovie";

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

const GET_ALL_MOVIES_QUERY = gql`
  query GetMovies {
    listMovies {
      name
      genre
      year
    }
  }
`;

const Movies = () => {
  const { loading, error, data: movies } = useQuery(GET_ALL_MOVIES_QUERY);
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error : {error.message}</p>;
  console.log("Movies fetched:", movies);

  if (movies?.listMovies?.length === 0)
    return <p className="no-movies">No movies added</p>;

  return (
    <div className="movie">
      {movies?.listMovies?.map((movie, i) => (
        <SingleMovie key={i} movie={movie}></SingleMovie>
      ))}
    </div>
  );
};

export default Movies;
