import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSearchMovies } from 'services/api';
import { Box } from 'components/Box';
import { MovieList } from 'components/MovieList';
import { Searchbar } from 'components/Searchbar';
import { Container } from 'components/SharedLayout';
import { MyLoader } from 'components/MyLoader';

const ERROR_MESSAGE = 'Something went wrong, please try to reload the page.';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    setMovies([]);

    if (queryParam === '') {
      return;
    }

    setIsLoading(true);
    getSearchMovies(queryParam)
      .then(setMovies)
      .catch(err => {
        toast.error(ERROR_MESSAGE);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [queryParam]);

  const handleSearchParam = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setIsLoading(true);
  };

  return (
    <Box as="main">
      <Container>
        <Searchbar value={queryParam} onSubmit={handleSearchParam} />
        <MovieList movies={movies} />
        <MyLoader isLoading={isLoading} />
      </Container>
    </Box>
  );
}
