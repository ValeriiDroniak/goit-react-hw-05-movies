import { Link, useLocation } from 'react-router-dom';
import { createPosterUrl } from 'services/api';
import { Item, Wrapper } from './MovieItem.styled';

export const MovieItem = ({ movie: { name, title, poster_path, id } }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? `movies/${id}` : `${id}`;

  return (
    <Item>
      <Link to={path} state={{ from: location }}>
        <img src={createPosterUrl(poster_path)} alt={title ?? name} />
        <Wrapper>
          <p style={{ fontWeight: '700' }}>{title ?? name}</p>
        </Wrapper>
      </Link>
    </Item>
  );
};
