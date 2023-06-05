import { LogoLink, LogoBox } from './Logo.styled';

import { FaUsers } from 'react-icons/fa';

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoBox>
        <FaUsers />
      </LogoBox>
    </LogoLink>
  );
};

export default Logo;
