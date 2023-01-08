import styled from '@emotion/styled';

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  text-align: center;
  box-shadow: ${p => p.theme.shadows.card};
`;

export const Image = styled.img`
  object-fit: cover;
  flex: 1 0 auto;
`;

export const Info = styled.p`
  padding: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;
