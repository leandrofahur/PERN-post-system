import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

interface mainProps {
  setAuth: (bool: boolean) => void;
  username: string;
}

const Main: React.FC<mainProps> = ({ setAuth, username }) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log(username);
    setAuth(false);
  };

  return (
    <Container>
      <Header>
        <button onClick={onClick}>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{username}</strong>
          <span>21 Posts</span>
        </ProfileInfo>
      </Header>

      <ProfilePage username={username} />

      {/* <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  );
};

export default Main;
