import React from 'react';

import Main from '../Main';
import { Container, Wrapper } from './styles';

interface layoutProps {
  setAuth: (bool: boolean) => void;
  username: string;
}

const Layout: React.FC<layoutProps> = ({ setAuth, username }) => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main setAuth={setAuth} username={username} />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
