import React, { useState } from 'react';

import UserService from '../../services/UserService';
import PostService from '../../services/PostService';
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

interface postProps {
  username: string;
}

const Tweet: React.FC<postProps> = ({ username }) => {
  const [content, setContent] = useState('');

  const registerPost = async () => {
    try {
      const response_id = await UserService.getId(username);
      const user_id = response_id.data;
      const response = await PostService.create({ content }, user_id);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

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
            <PostButton outlined onClick={registerPost}>
              Post
            </PostButton>
          </TweetForm>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
