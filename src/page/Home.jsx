import { toast } from 'react-toastify';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getTrendigDays } from 'services/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendigDays()
      .then(setMovies)
      .catch(err => {
        toast.error('Something went wrong, please try to reload the page.');
        console.log(err);
      });
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
