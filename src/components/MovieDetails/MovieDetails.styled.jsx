import styled from '@emotion/styled';

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
