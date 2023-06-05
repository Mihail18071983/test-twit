import styled from '@emotion/styled';

export const Panel = styled.div`
  width: 100%;
  max-width:100vw;
  display: flex;
  align-items: flex-end;
`;

export const ActionsBox = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]};
  margin-left: auto;
`;
