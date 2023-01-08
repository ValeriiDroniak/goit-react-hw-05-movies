import { MovieItem } from 'components/MovieItem';
import { MovieItems } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <MovieItems>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie}></MovieItem>
      ))}
    </MovieItems>
  );
};
