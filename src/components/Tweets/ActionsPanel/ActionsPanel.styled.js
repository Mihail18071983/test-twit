import styled from "@emotion/styled";


import { Form } from "react-bootstrap";

export const ActionsBox = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space[4]};
`;



export const StyledFormSelect = styled(Form.Select)`
background-color:${(p) => p.theme.colors.secondary};
font-size: ${(p) => p.theme.fontSizes.m};
font-weight: ${(p) => p.theme.fontWeights.bold};
text-align: center;
border-radius: ${(p) => p.theme.radius.normal};`;
