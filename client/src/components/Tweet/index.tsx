import React from 'react';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  PostButton,
  TweetForm,
} from './styles';

import TextArea from '../TextArea';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Leandro</strong>
            <span>@leandro </span>
            <Dot />
            <time>{Date().substr(0, 15)}</time>
          </Header>
          <TweetForm>
            <TextArea rows={6} placeholder="What are you thinking?"></TextArea>
            <PostButton outlined>Post</PostButton>
          </TweetForm>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
