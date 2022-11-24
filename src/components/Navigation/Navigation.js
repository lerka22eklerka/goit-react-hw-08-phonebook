import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavBox, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavBox>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {loggedIn && (
        <NavLinkStyled to="/contacts">
          Contacts
        </NavLinkStyled>
      )}
    </NavBox>
  );
};
