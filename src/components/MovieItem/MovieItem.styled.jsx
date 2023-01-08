import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: block;
  box-shadow: ${p => p.theme.shadows.work};
  max-width: max-content;

  transform: scale(1);
  transition: transform ${p => p.theme.transitions.cub};

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  padding: ${p => p.theme.space[3]}px 0;
  text-align: center;
  color: rgb(255, 0, 38);
  background-color: ${p => p.theme.colors.black};
`;

export const Title = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
