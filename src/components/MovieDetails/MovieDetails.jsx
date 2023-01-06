import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { createPosterUrl, getMovieDetails } from 'services/api';
import { Box } from 'components/Box/Box';
import { BoxInfo, Info, TagInfo, Title } from './MovieDetails.styled';
import { LinkNav } from 'components/SharedLayout/SharedLayout.styled';

const navItems = [
  { href: 'cast', title: 'Cast' },
  { href: 'reviews', title: 'Reviews' },
];

export default function MovieDetails() {
  // const location = useLocation();
  // const backPath = useRef();

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!MovieDetails) {
      return;
    }

    getMovieDetails(movieId).then(setMovieDetails).catch(console.log).finally();
    // const fetchDetails = async () => {
    //   const details = await getMovieDetails(movieId);
    //   setMovieDetails(details);
    // };

    // fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { title, genres, overview, poster_path, release_date, vote_average } =
    movieDetails;

  return (
    <>
      <Box display="flex" gridGap="42px" m="32px 16px">
        <Box maxWidth="240px">
          <Box boxShadow="go_it" borderRadius="normal" overflow="hidden">
            <img src={createPosterUrl(poster_path)} alt={title} />
          </Box>
        </Box>
        <Box maxWidth="600px">
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
          {/* <BoxInfo>
            <TagInfo>Release date:</TagInfo>
            <Info>{release_date}</Info>
          </BoxInfo> */}
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
                <LinkNav
                  to={href}
                  style={{
                    display: 'inline-block',
                    padding: '16px 0',
                    textDecoration: 'none',
                    // color: 'rgb(151 1 1)', //Hover
                    fontWeight: '700',
                    fontSize: '20px',

                    // color: 'rgba(203, 4, 4, 0.8)',
                  }}
                >
                  {title}
                </LinkNav>
              </li>
            ))}
          </Box>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
