import { NavLink } from 'react-router-dom';
import { NavBox } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <NavBox>
      <NavLink  to="/register">
        Register
      </NavLink>
      <NavLink  to="/login">
        Log In
      </NavLink>
    </NavBox>
  );
};
