import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { createPosterUrl, getMovieDetails } from 'services/api';
import { MyLoader } from 'components/MyLoader';
import { Box } from 'components/Box';
import { Container } from 'components/SharedLayout';
import { LinkItem, BoxInfo, Info, TagInfo, Title } from './MovieDetails.styled';

const ERROR_MESSAGE = 'Something went wrong, please try to reload the page.';
const navItems = [
  { href: 'cast', title: 'Cast' },
  { href: 'reviews', title: 'Reviews' },
];

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pathToBack = useRef();
  const location = useLocation();
  const { movieId } = useParams();

  if (!pathToBack.current) {
    pathToBack.current = location.state?.from ?? '/';
  }

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(setMovieDetails)
      .catch(err => {
        toast.error(ERROR_MESSAGE);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { title, genres, overview, poster_path, release_date, vote_average } =
    movieDetails;

  return (
    <Box as="main" pb="64px">
      <Container>
        <Box m="16px">
          <Link to={pathToBack.current}>
            <BsArrowLeft size="32px" fill="rgba(203, 4, 4, 0.8)" />
          </Link>
        </Box>
        <Box display="flex" gridGap="42px" mt={3}>
          <Box maxWidth="380px" flex="1 0 auto">
            <Box boxShadow="go_it" borderRadius="normal" overflow="hidden">
              <img src={createPosterUrl(poster_path)} alt={title} />
            </Box>
          </Box>
          <Box>
            <Title>
              {title} ({release_date.slice(0, 4)})
            </Title>
            <BoxInfo>
              <TagInfo>Rating:</TagInfo>
              <Info>{vote_average.toFixed(1)}</Info>
            </BoxInfo>
            <BoxInfo>
              <TagInfo>Genres:</TagInfo>
              <Info>{genres.map(({ name }) => name).join(', ')}</Info>
            </BoxInfo>
            <BoxInfo>
              <TagInfo>Overview:</TagInfo>
              <Info>{overview}</Info>
            </BoxInfo>
            <Box
              as="ul"
              display="flex"
              justifyContent="center"
              gridGap="24px"
              m="16px 0"
              backgroundColor="rgba(21, 14, 14, 0.9)"
              borderRadius="normal"
              boxShadow="go_it"
            >
              {navItems.map(({ href, title }) => (
                <li key={href}>
                  <LinkItem to={href}>{title}</LinkItem>
                </li>
              ))}
            </Box>
            <Outlet />
          </Box>
        </Box>
        <MyLoader isLoading={isLoading} />
      </Container>
    </Box>
  );
}
