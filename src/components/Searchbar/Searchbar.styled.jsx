import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.radii.none};
  outline: none;
  padding-left: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[1]}px;
  background-color: rgba(255, 255, 255, 0);
`;

export const SearchButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: ${p => p.theme.radii.none};
  opacity: 0.6;
  transition: opacity ${p => p.theme.transitions.cub};
  cursor: pointer;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
