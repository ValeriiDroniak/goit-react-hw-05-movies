import { Box } from 'components/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { ReviewItem, Title, Text, InfoDate } from './Reviews.styled';

const Message_Info = "We don't have any reviews for this movie";

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <Box maxWidth="100%">
      {reviews.length === 0 ? (
        <p>{Message_Info}</p>
      ) : (
        <Box display="flex" flexDirection="column" gridGap={3}>
          {reviews.map(({ author, content, id, updated_at }) => (
            <ReviewItem>
              <Title>
                {author}
                <InfoDate> | {updated_at.slice(0, 10)}</InfoDate>
              </Title>
              <Text>{content}</Text>
            </ReviewItem>
          ))}
        </Box>
      )}
    </Box>
  );
};
