import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getSearchMovies } from 'services/api';
import { Box } from 'components/Box/Box';
import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  // const [query, setQuery] = useState('');
  const handleSearchParam = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    if (queryParam === '') {
      return;
    }

    getSearchMovies(queryParam)
      .then(setMovies)
      .catch(err => {
        toast.error('Something went wrong, please try to reload the page.');
        console.log(err);
      });
  }, [queryParam]);

  return (
    <Box as="main">
      <Searchbar value={queryParam} onSubmit={handleSearchParam} />
      <MovieList movies={movies} />
    </Box>
  );
}
