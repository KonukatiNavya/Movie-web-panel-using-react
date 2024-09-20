import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../API';
import MovieList from '../components/MovieList';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    searchMovies(query).then((response) => setMovies(response.data.results));
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResults;
