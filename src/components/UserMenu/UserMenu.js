import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getItems } from 'redux/contacts/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { contact } = useSelector(getItems);

  return (
    <div>
      <p>Welcome, {contact.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
