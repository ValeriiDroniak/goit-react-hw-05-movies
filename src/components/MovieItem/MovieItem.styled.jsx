import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: block;
  box-shadow: ${p => p.theme.shadows.work};
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  color: rgb(255, 0, 38);
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.6;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
