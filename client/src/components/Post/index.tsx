import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import PostService from '../../services/PostService';
import CommentService from '../../services/CommentService';
import api from '../../services/api';
import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  PostButton,
  TweetForm,
  PostForm,
  CommentContainer,
  PostContainer,
  CommentList,
  Comment,
} from './styles';

import TextArea from '../TextArea';

const Post: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [enable, setEnable] = useState<boolean>(false);
  const [reply, setReply] = useState<string>('');
  const [usersPosts, setUsersPosts] = useState<
    {
      id: string;
      content: string;
      user_id: string;
      createdAt: Date;
      user: {
        username: string;
      };
      comments: [
        {
          id: string;
          content: string;
          createdAt: Date;
        }
      ];
    }[]
  >([]);
  const [post, setPost] = useState<string>('');

  const onReply = async (post_id: string, user_id: string) => {
    const response = await api.post(`/comments/${post_id}`, {
      content: reply,
      user_id,
    });
    console.log(response.data);
    setLoading(true);
  };

  const getAllPostsFromUsers = async () => {
    const response = await PostService.getAll();
    // console.log(response.data);
    setUsersPosts(response.data);
    setLoading(false);
  };

  const onComment = (post_id: string) => {
    setEnable(true);
    setPost(post_id);
  };

  useEffect(() => {
    getAllPostsFromUsers();
  }, [loading]);

  return (
    <Container>
      {usersPosts?.map((userPost) => {
        return (
          <Body key={userPost.id}>
            <Avatar />
            <Content>
              <Header>
                <strong>{userPost.user['username']}</strong>
                <span>@{userPost.user['username']}</span>
                <Dot />
              </Header>
              <PostContainer>
                <PostForm>
                  <p>{userPost.content}</p>
                </PostForm>
                <time>
                  {format(new Date(userPost.createdAt), 'MM/dd/yyyy')}
                </time>
                {userPost.id === post && enable ? (
                  <CommentContainer>
                    <TextArea
                      rows={3}
                      onChange={(e) => {
                        setReply(e.target.value);
                      }}
                    ></TextArea>
                    <PostButton
                      outlined
                      onClick={() =>
                        onReply(userPost['id'], userPost['user_id'])
                      }
                    >
                      Comment
                    </PostButton>
                  </CommentContainer>
                ) : (
                  <PostButton outlined onClick={() => onComment(userPost.id)}>
                    Reply
                  </PostButton>
                )}
                <CommentList>
                  {userPost.comments.map((comment) => (
                    <>
                      <Comment key={comment['id']}>
                        {comment['content']}
                      </Comment>
                      <time>
                        {format(new Date(comment['createdAt']), 'MM/dd/yyyy')}
                      </time>
                    </>
                  ))}
                </CommentList>
              </PostContainer>
            </Content>
          </Body>
        );
      })}
    </Container>
  );
};

export default Post;
