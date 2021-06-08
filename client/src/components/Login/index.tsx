import React from 'react';

import Input from '../Input';

import {
  Container,
  Card,
  SignSection,
  GuestSection,
  LoginButton,
  GuestButton,
  UserIcon,
  EmailIcon,
  FieldForm,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Card>
        <SignSection>
          <FieldForm>
            <UserIcon />
            <Input type="text" name="username" placeholder="username" />
          </FieldForm>
          <FieldForm>
            <EmailIcon />
            <Input type="email" name="email" placeholder="email" />
          </FieldForm>
          <LoginButton outlined>Login</LoginButton>
          <GuestButton outlined>Guest</GuestButton>
        </SignSection>
      </Card>
    </Container>
  );
};

export default Login;
