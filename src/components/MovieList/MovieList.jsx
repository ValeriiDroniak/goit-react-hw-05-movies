import PropTypes from 'prop-types';
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ),
};
