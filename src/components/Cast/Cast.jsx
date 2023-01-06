import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPosterUrl, getCast } from 'services/api';
import profilImg from 'utils/default_profile.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    console.log('use movieId', movieId);
    getCast(movieId).then(setCast);
  }, [movieId]);

  // if (!cast) {
  //   return;
  // }
  console.log('cast', cast);
  return (
    <Box pb="64px">
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minMax(120px, 1fr))"
        gridGap="16px"
      >
        {cast.map(({ cast_id, name, profile_path }) => (
          <li
            key={cast_id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              borderRadius: '4px',
              overflow: 'hidden',
              textAlign: 'center',
              boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
            }}
          >
            <img
              style={{
                flex: '1 1 auto',
                objectFit: 'cover',
              }}
              src={profile_path ? createPosterUrl(profile_path) : profilImg}
              alt={name}
            />
            <p
              style={{
                padding: '8px',
                fontWeight: 500,
              }}
            >
              {name}
            </p>
          </li>
        ))}
      </Box>
    </Box>
  );
};
