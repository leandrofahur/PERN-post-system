import React, { useState } from 'react';

import Input from '../Input';

import { toast } from 'react-toastify';

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

import UserService from '../../services/UserService';
import { Redirect } from 'react-router-dom';

interface LoginProps {
  setAuth: (bool: boolean) => void;
  setUsername: (username: string) => void;
  username: string;
}

const Login: React.FC<LoginProps> = ({ setAuth, setUsername, username }) => {
  const [user, setUser] = useState<
    { id: string; username: string; email: string } | undefined
  >();

  const onGuestLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      setUsername('Guest');
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onUserLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const response = await UserService.getAll();
      const users = response.data;
      // console.log(users);
      const user = users.find((user: any) => {
        return user.username === username;
      });
      // console.log(user);
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <Card>
        <SignSection>
          <FieldForm>
            <UserIcon />
            <Input
              positive
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FieldForm>
          <FieldForm>
            <EmailIcon />
            <Input positive type="email" name="email" placeholder="email" />
          </FieldForm>
          <LoginButton outlined onClick={onUserLogin}>
            Login
          </LoginButton>
          <GuestButton outlined onClick={onGuestLogin}>
            Guest
          </GuestButton>
        </SignSection>
      </Card>
    </Container>
  );
};

export default Login;
