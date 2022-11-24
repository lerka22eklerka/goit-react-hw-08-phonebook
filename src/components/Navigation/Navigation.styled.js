import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  color: black;
  transition: 300ms;
  &.active,
  &:hover {
    font-weight: 700;
    color: #ff0000;
  }
`;
