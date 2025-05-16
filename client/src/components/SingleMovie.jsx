const SingleMovie = ({ movie }) => {
  return (
    <div className="card">
      <div className="container">
        <h2>{movie.name}</h2>
        <h4>
          {movie.genre} - {movie.year}
        </h4>
      </div>
    </div>
  );
};

export default SingleMovie;
