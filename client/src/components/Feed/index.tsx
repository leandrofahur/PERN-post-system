import React, { useState } from 'react';

import Tweet from '../Tweet';
import Post from '../Post';

import { Container, Tab, Tweets, Tabs, Posts } from './styles';

const Feed: React.FC = () => {
  const [tab, setTab] = useState(true);

  return (
    <Container>
      <Tabs>
        <Tab className={`${tab ? 'active' : ''}`} onClick={(e) => setTab(!tab)}>
          Tweet
        </Tab>
        <Tab
          className={`${!tab ? 'active' : ''}`}
          onClick={(e) => setTab(!tab)}
        >
          Feed
        </Tab>
      </Tabs>

      {tab ? (
        <Tweets>
          <Tweet />
        </Tweets>
      ) : (
        <Posts>
          <Post />
        </Posts>
      )}
    </Container>
  );
};

export default Feed;
