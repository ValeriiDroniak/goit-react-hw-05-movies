import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  padding: ${p => p.theme.space[3] + p.theme.space[2]}px 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: rgba(203, 4, 4, 0.8);
  text-decoration: none;
  transition: color ${p => p.theme.transitions.cub};

  &.active {
    color: rgb(255, 0, 38);
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: rgb(255, 0, 38);
  }
`;
