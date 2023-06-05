import styled from '@emotion/styled';

export const FilterBox = styled.div`
  position: absolute;
  top: calc(50px + ${p => p.theme.space[4]});
  left: 0;
  width: 196px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${p => p.theme.space[4]};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.high};
  z-index: 2;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: ${p => p.theme.transition.primary};

  input,
  label {
    cursor: pointer;
  }

  label {
    margin-left: ${p => p.theme.space[3]};
  }

  div {
    display: flex;
    align-items: baseline;
  }
`;
