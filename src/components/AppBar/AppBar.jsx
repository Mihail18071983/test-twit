import { memo } from 'react';

import Navigation from './Navigation/Navigation';
import Container from './Container/Container';

import Logo from './Logo/Logo';

const AppBar = () => {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
};

export default memo(AppBar);
