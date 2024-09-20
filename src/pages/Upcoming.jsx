import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../API';
import MovieList from '../components/MovieList';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Upcoming;
