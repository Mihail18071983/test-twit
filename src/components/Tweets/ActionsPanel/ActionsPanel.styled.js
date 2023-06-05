import styled from "@emotion/styled";

export const Panel = styled.div`
  width: 100%;
  max-width: 100vw;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const ActionsBox = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space[4]};
  margin-left: auto;
`;
