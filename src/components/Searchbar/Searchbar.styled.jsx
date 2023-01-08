import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 320px;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  margin: ${p => p.theme.space[4]}px auto;
  background-color: rgba(0, 0, 0, 0.7);
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
  color: ${p => p.theme.colors.white};
  background-color: rgba(255, 255, 255, 0);
`;

export const SearchButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: ${p => p.theme.radii.none};
  opacity: 0.7;
  transition: opacity ${p => p.theme.transitions.cub};
  cursor: pointer;
  outline: none;
  background-color: ${p => p.theme.colors.overlay};

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
