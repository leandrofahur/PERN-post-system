import React, { useState, useEffect } from 'react';

import UserService from '../../services/UserService';
import PostService from '../../services/PostService';
import CommentService from '../../services/CommentService';

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
  users: {
    id: string;
    username: string;
    email: string;
    createdAt: Date | null;
  }[];
  posts: {
    id: string;
    content: string;
    user_id: string;
    createdAt: Date | null;
  }[];

  comments: {
    id: string;
    content: string;
    post_id: string;
    createdAt: Date | null;
  }[];
}

const Post: React.FC<tweetProps> = ({ users, posts, comments }) => {
  console.log(users);
  console.log(posts);
  console.log(comments);

  // const [ids, setIds] = useState<{ id: string }[]>([]);
  // const [users, setUsers] = useState<
  //   | { id: string; username: string; email: string; createdAt: Date }[]
  //   | undefined
  // >([]);
  // const [posts, setPosts] = useState<
  //   | { id: string; content: string; user_id: string; createdAt: Date }[]
  //   | undefined
  // >([]);
  // const [comments, setComments] = useState<
  //   | { id: string; content: string; post_id: string; createdAt: Date }[]
  //   | undefined
  // >([]);

  // const idArray: { id: string }[] = [];

  // const getAllUsers = async () => {
  //   const response = await UserService.getAll();
  //   setUsers(response.data);
  //   console.log(users);
  //   users?.map((user) => idArray.push({ id: user['id'] }));
  //   console.log(idArray);
  // };

  // useEffect(() => {
  // getAllUsers();
  // getAllPostsByUsers();
  // getAllComments();
  // }, []);

  return (
    <Container>
      {posts.map((post) => {
        return (
          <Body>
            <Avatar />
            <Content>
              <Header>
                <strong>
                  {post['user_id']}
                  {/* {users.find((user) => user['id'] === post['user_id'])} */}
                </strong>
                <span>
                  @{post['user_id']}
                  {/* @{users.find((user) => user['id'] === post['user_id'])} */}
                </span>
                <Dot />
                <time>{post['createdAt']}</time>
              </Header>
              <TweetForm>
                <TextArea
                  disabled
                  rows={6}
                  placeholder="Some post..."
                  value={post['content']}
                ></TextArea>
                <PostButton outlined>Reply</PostButton>
              </TweetForm>
            </Content>
          </Body>
        );
      })}
    </Container>
  );
};

export default Post;

{
  /* <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>username</strong>
            <span>@username</span>
            <Dot />
            <time>{Date().substr(0, 15)}</time>
          </Header>
          <TweetForm>
            <TextArea
              disabled
              rows={6}
              placeholder="Some post..."
              // value={content}
              // onChange={(e) => {
              // setContent(e.target.value);
              // }}
            ></TextArea>
            <PostButton outlined>Reply</PostButton>
          </TweetForm>
        </Content>
      </Body> */
}
