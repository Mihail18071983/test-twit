import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  color: #373737;
  text-align: center;
  background-color: ${p =>
    p.active ? p.theme.colors.accent : p.theme.colors.secondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  transition: ${p => p.theme.transition.primary};

  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const BtnText = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
`;
