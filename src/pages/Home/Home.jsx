import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getTrendigDays } from 'services/api';
import { MovieList } from 'components/MovieList';
import { Container } from 'components/SharedLayout';
import { MyLoader } from 'components/MyLoader';
import { Box } from 'components/Box';

const ERROR_MESSAGE = 'Something went wrong, please try to reload the page.';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendigDays()
      .then(setMovies)
      .catch(err => {
        toast.error(ERROR_MESSAGE);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Box as="main">
      <Container>
        <MovieList movies={movies} />
        <MyLoader isLoading={isLoading} />
      </Container>
    </Box>
  );
}
