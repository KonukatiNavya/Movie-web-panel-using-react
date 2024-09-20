
// import React from 'react';

// const MovieCard = ({ movie }) => {
//   const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

//   return (
//     <div className="movie-card">
//       <img src={imageUrl} alt={movie.title} />
//       <h3>{movie.title}</h3>
//       <p>Rating: {movie.vote_average}</p>
//     </div>
//   );
// };

// export default MovieCard;
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </Link>
  );
};

export default MovieCard;
