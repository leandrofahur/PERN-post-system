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
  const [user, setUser] = useState<string>('');

  const onGuestLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      setUsername('Guest');
      toast.success('Successfully Logged in');
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onUserLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const response = await UserService.getUsersPosts();
      const users = response.data;
      // console.log(users);
      const isUser = users.find((user: any) => {
        return user.username === username;
      });
      if (isUser) {
        toast.success('Successfully Logged in');
        setAuth(true);
      } else {
        toast.error('Invalid user');
        setAuth(false);
      }
      // console.log(user);
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
            <Input
              positive
              type="email"
              name="email"
              placeholder="email"
              value={user}
              onChange={(e) => setUser(user)}
            />
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
