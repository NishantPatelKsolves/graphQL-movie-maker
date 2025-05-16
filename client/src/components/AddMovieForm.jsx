import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const ADD_MOVIE_MUTATION = gql`
  mutation AddMovie(
    $movieName: String!
    $genreType: String!
    $yearReleased: String!
  ) {
    addMovie(name: $movieName, genre: $genreType, year: $yearReleased) {
      name
      genre
      year
    }
  }
`;

const GET_ALL_MOVIES_QUERY = gql`
  query GetMovies {
    listMovies {
      name
      genre
      year
    }
  }
`;

const AddMovieForm = () => {
  const [movieName, setMovieName] = useState("");
  const [genreType, setGenreType] = useState("");
  const [yearReleased, setYearReleased] = useState("");
  const [addMovieMutationFunction, { loading, error }] =
    useMutation(ADD_MOVIE_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovieMutationFunction({
      variables: {
        movieName: movieName,
        genreType: genreType,
        yearReleased: yearReleased,
      },
      refetchQueries: [
        {
          query: GET_ALL_MOVIES_QUERY,
        },
      ],
    });
  };

  if (loading) return <p className="loading">Submitting...</p>;
  if (error)
    return <p className="error">{`Submission error! ${error.message}`}</p>;

  return (
    <div className="addMovie" id="addNewMovie">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Name"
          required
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Movie Genre"
          required
          value={genreType}
          onChange={(e) => setGenreType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Movie Year"
          value={yearReleased}
          onChange={(e) => setYearReleased(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
      <div className="top">
        <HashLink smooth to="#header" className="top-button">
          Back to top
        </HashLink>
      </div>
    </div>
  );
};

export default AddMovieForm;
