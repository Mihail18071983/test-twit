import { memo } from 'react';

import Navigation from './Navigation';
import Container from './Container';

import Logo from './Logo';

const AppBar = () => {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
};

export default memo(AppBar);
