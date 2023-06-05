import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import theme from "theme";

export const Nav = styled.nav`
  margin-left: ${theme.space[5]};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
list-style: none;
  :not(:last-of-type) {
    margin-right: ${theme.space[4]};
  }
`;

export const Link = styled(NavLink)`,
  list-style:none;
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.secondary};
  transition: ${theme.transition.primary};
  display: inline-flex;
  align-items: center;
  transition: ${theme.transition.primary} svg {
    margin-right: ${theme.space[2]};
  }

  &.active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
    padding: ${theme.space[1]} ${theme.space[3]};
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadow.medium};

    :hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.accent};
    }
  }

  :hover {
    color: ${theme.colors.accent};
  }
`;

export const LinkTxt = styled.span`
  margin-left: ${theme.space[3]};
`;
