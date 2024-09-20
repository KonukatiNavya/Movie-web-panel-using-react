import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast } from '../API';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(id);
      setMovie(details.data);
    };

    const fetchMovieCast = async () => {
      const castDetails = await getMovieCast(id);
      setCast(castDetails.data.cast);
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="movie-detail">
      <img src={imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <ul>
        {cast.map(member => (
          <li key={member.cast_id}>{member.name} as {member.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;

