import { BtnStyled, Input, LabelStyled } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { FormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Email
        <Input type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <Input type="password" name="password" />
      </LabelStyled>
      <BtnStyled type="submit">Log In</BtnStyled>
    </FormStyled>
  );
};
