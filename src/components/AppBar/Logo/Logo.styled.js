import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const LogoLink = styled(NavLink)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.secondary};
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    height: 60px;
    width: 60px;
  }
`;
