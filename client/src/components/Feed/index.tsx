import React, { useState, useEffect } from 'react';

import Tweet from '../Tweet';
import Post from '../Post';

import { Container, Tab, Tabs, Posts } from './styles';

interface feedProps {
  username: string;
}

const Feed: React.FC<feedProps> = ({ username }) => {
  const [tab, setTab] = useState(true);

  return (
    <Container>
      <Tabs>
        {!username ? null : (
          <Tab
            className={`${tab ? 'active' : ''}`}
            onClick={(e) => setTab(!tab)}
          >
            Tweet
          </Tab>
        )}
        <Tab
          className={`${!tab ? 'active' : ''}`}
          onClick={(e) => setTab(!tab)}
        >
          Feed
        </Tab>
      </Tabs>

      {tab && username !== 'Guest' ? <Tweet username={username} /> : <Post />}
    </Container>
  );
};

export default Feed;
