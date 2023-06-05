import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin-left: auto;
  margin-right: auto;
  color: #373737;
  background-color: ${p =>
    p.active ? p.theme.colors.accent : p.theme.colors.secondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const BtnText = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
`;
