import { FaHome, FaRetweet } from 'react-icons/fa';

import { Nav, NavList, NavItem, Link, LinkTxt } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">
            <FaHome />
            <LinkTxt>Home</LinkTxt>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/tweets">
            <FaRetweet />
            <LinkTxt>Tweets</LinkTxt>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
