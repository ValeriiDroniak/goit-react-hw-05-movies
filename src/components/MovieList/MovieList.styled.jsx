import styled from '@emotion/styled';

export const MovieItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[4]}px 0;
`;
