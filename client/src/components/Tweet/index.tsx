import React, { useState } from 'react';

import postService from '../../services/PostService';
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

interface tweetProps {
  username: string;
}

const Tweet: React.FC<tweetProps> = ({ username }) => {
  const [content, setContent] = useState('');

  // const registerPost = async () => {
  //   try {
  //     const response = await postService.create({ content });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>{username}</strong>
            <span>@{username} </span>
            <Dot />
            <time>{Date().substr(0, 15)}</time>
          </Header>
          <TweetForm>
            <TextArea
              rows={6}
              placeholder="What are you thinking?"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></TextArea>
            <PostButton outlined>Post</PostButton>
          </TweetForm>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
