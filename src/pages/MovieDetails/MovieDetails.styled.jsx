import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const TagInfo = styled.span`
  display: block;
  min-width: 120px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Info = styled.span`
  display: block;
`;

export const BoxInfo = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const LinkItem = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[3]}px 0;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.sizes[4]};
  color: ${p => p.theme.colors.primary};

  transition: color ${p => p.theme.transitions.cub};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
