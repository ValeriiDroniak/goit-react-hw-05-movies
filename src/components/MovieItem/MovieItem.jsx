import { createPosterUrl } from 'services/api';
import { Item, Wrapper } from './MovieItem.styled';
import { NavLink, useLocation } from 'react-router-dom';

export const MovieItem = ({ movie: { name, title, poster_path, id } }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? `movies/${id}` : `${id}`;

  return (
    <Item>
      <NavLink
        to={path}
        // state={{ from: `${location.pathname + location.search}` }}
      >
        <img src={createPosterUrl(poster_path)} alt={title ?? name} />
        <Wrapper>
          <p style={{ fontWeight: '700' }}>{title ?? name}</p>
        </Wrapper>
      </NavLink>
    </Item>
  );
};
