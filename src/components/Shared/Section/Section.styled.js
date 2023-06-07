import styled from "@emotion/styled";
import theme from "theme";

export const SectionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space[6]} 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  padding: 0 ${theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`;
