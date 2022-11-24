
import { NavBox, NavLinkStyled } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <NavBox>
      <NavLinkStyled  to="/register">
        Register
      </NavLinkStyled>
      <NavLinkStyled  to="/login">
        Log In
      </NavLinkStyled>
    </NavBox>
  );
};
