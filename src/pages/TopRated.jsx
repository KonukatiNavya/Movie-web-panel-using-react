import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../API';
import MovieList from '../components/MovieList';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRated;
