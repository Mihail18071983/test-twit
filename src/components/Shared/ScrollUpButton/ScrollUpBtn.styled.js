import styled from '@emotion/styled';
import theme from 'theme';

const ScrollUpButtonStyled = styled.button`
  position: fixed;
  bottom: ${theme.space[6]};
  right: ${theme.space[6]};
  display: inline-flex;
  opacity: 0.6;
  padding: ${theme.space[3]};
  color: ${theme.colors.primary};
  background-color: ${p =>
    p.disabled ? theme.colors.muted : theme.colors.accent};
  cursor: pointer;
  border: ${theme.borders.none};
  border-radius: ${p => (p.round ? theme.radius.round : theme.radius.normal)};
  box-shadow: ${theme.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    background-color: ${theme.colors.accent};
    box-shadow: ${theme.shadow.medium};
    scale: 1.1;
    opacity: 1;
  }
`;

export default ScrollUpButtonStyled;
