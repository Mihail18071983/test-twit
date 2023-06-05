import { HeaderBox, HeaderContainer } from './Container.styled';

const Container = ({ children }) => {
  return (
    <HeaderBox >
      <HeaderContainer>{children}</HeaderContainer>
    </HeaderBox>
  );
};

export default Container;
