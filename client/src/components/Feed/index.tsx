import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets, Tabs } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab className="active">Tweet</Tab>
        <Tab>Feed</Tab>
      </Tabs>

      <Tweets>
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
