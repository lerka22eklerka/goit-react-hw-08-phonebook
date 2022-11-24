import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {loggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
