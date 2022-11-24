import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Header } from './AppBar.styled';


export const AppBar = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
