import React, { useState, useEffect } from 'react';

import Tweet from '../Tweet';
import Post from '../Post';
import UserService from '../../services/UserService';
import PostService from '../../services/PostService';
import CommentService from '../../services/CommentService';

import { Container, Tab, Tabs, Posts } from './styles';

interface feedProps {
  username: string;
}

const Feed: React.FC<feedProps> = ({ username }) => {
  const [tab, setTab] = useState(true);
  const [users, setUsers] = useState<
    {
      id: string;
      username: string;
      email: string;
      createdAt: Date | null;
    }[]
  >([]);
  const [posts, setPosts] = useState<
    {
      id: string;
      content: string;
      user_id: string;
      createdAt: Date;
    }[]
  >([]);
  const [comments, setComments] = useState<
    {
      id: string;
      content: string;
      post_id: string;
      createdAt: Date | null;
    }[]
  >([]);

  const getAllUsers = async () => {
    const response = await UserService.getAll();
    setUsers(response.data);
  };

  const getAllPosts = async () => {
    const response = await PostService.getAll();
    setPosts(response.data);
  };

  const getAllComments = async () => {
    const response = await CommentService.getAll();
    setComments(response.data);
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
    getAllComments();
  }, []);

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

      {tab && username !== 'Guest' ? (
        <Tweet username={username} />
      ) : (
        <Post users={users} posts={posts} comments={comments} />
      )}
    </Container>
  );
};

export default Feed;
