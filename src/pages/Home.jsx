import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../API';
import MovieList from '../components/MovieList';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
