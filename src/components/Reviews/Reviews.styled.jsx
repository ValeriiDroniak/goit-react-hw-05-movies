import styled from '@emotion/styled';

export const ReviewItem = styled.li`
  padding: ${p => p.theme.space[2]}px;
  box-shadow: ${p => p.theme.shadows.card};
  background-color: rgba(255, 153, 153, 0.1);
`;

export const Title = styled.p`
  padding-bottom: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.primary};
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[2]}px;
`;

export const InfoDate = styled.span`
  color: ${p => p.theme.colors.text.secondary};
`;
