import styled from '@emotion/styled';

import theme from 'theme';

export const HeaderBox = styled.header`
  padding: ${theme.space[4]} 0;
  background-color: ${theme.colors.primary};
  width: 100%;
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  padding: 0 ${theme.space[5]};
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
