import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews === []) {
    return;
  }

  return (
    <Box pb="64px">
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {reviews.map(({ author, content, id, updated_at }) => (
          <li
            key={id}
            style={{
              padding: '8px',
              boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
              backgroundColor: 'rgba(255, 153, 153, 0.1)',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                borderBottom: '1px solid',
                paddingBottom: '8px',
                color: 'rgba(203, 4, 4, 0.8)',
              }}
            >
              {author} | <span>{updated_at.slice(0, 10)}</span>
            </p>
            <p
              style={{
                lineHeight: '1.5',
                padding: '8px',
              }}
            >
              {content}
            </p>
          </li>
        ))}
      </ul>
    </Box>
  );
};
