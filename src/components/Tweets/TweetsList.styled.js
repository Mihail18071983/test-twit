import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => (p.noPadding ? 0 : p.theme.space[5])};
`;

export const EmptyListMessage = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  margin-top: ${p => p.theme.space[7]};
`;
