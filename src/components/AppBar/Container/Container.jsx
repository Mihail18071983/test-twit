import { HeaderBox, HeaderContainer } from './Container.styled';

const Container = ({ children, mediaType }) => {
  return (
    <HeaderBox mediaType={mediaType}>
      <HeaderContainer mediaType={mediaType}>{children}</HeaderContainer>
    </HeaderBox>
  );
};

export default Container;
