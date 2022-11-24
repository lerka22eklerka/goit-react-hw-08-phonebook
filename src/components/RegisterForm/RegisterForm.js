import { BtnStyled, Input, LabelStyled } from 'components/ContactForm/ContactForm.styled';
import { FormStyled } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <Input type="text" name="name" />
      </LabelStyled>
      <LabelStyled>
        Email
        <Input type="email" name="email" />
      </LabelStyled>
      <LabelStyled>
        Password
        <Input type="password" name="password" />
      </LabelStyled>
      <BtnStyled type="submit">Register</BtnStyled>
    </FormStyled>
  );
};
