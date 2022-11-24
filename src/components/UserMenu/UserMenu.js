import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { LogoutBtn, User, UserMenuBox } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
   const handleLogout = () => {
     dispatch(logOut());
   };
console.log(user);
  return (
    <UserMenuBox>
      <User>Welcome, {user.name}</User>
      <LogoutBtn type="button" onClick={() => handleLogout()}>
        Logout
      </LogoutBtn>
    </UserMenuBox>
  );
};
