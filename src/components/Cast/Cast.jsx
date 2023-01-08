import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createPosterUrl, getCast } from 'services/api';
import profilImg from 'images/default_profile.jpg';
import { CastItem, Image, Info } from './Cast.styled';

const ERROR_MESSAGE = 'Something went wrong, please try to reload the page.';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(setCast)
      .catch(err => {
        toast.error(ERROR_MESSAGE);
        console.log(err);
      });
  }, [movieId]);

  return (
    <Box>
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minMax(120px, 1fr))"
        gridGap="16px"
      >
        {cast.map(({ cast_id, name, profile_path }) => (
          <CastItem key={cast_id}>
            <Image
              src={profile_path ? createPosterUrl(profile_path) : profilImg}
              alt={name}
            />
            <Info>{name}</Info>
          </CastItem>
        ))}
      </Box>
    </Box>
  );
};
