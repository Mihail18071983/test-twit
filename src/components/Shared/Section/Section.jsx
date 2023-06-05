import { SectionBox, Container } from './Section.styled';

const Section = ({ children }) => {
  return (
    <Container>
      <SectionBox>{children}</SectionBox>
    </Container>
  );
};

export default Section;
