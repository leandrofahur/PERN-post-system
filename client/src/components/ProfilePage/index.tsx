import React, { useEffect } from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import UserService from '../../services/UserService';
import Feed from '../Feed';

interface profilePageProps {
  username: string;
}

const ProfilePage: React.FC<profilePageProps> = ({ username }) => {
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await UserService.getAll();
  //     console.log(response);
  //   };

  //   getUsers();
  // }, []);

  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>
        <h1>{username}</h1>
        <h2>{username}</h2>

        <p>Developer</p>
        <ul>
          <li>
            <LocationIcon />
            British Columbia, Canada
          </li>
          <li>
            <CakeIcon />
            Born April 21st, 1989.
          </li>
        </ul>

        <Followage>
          <span>
            Following &nbsp; <strong>21</strong>
          </span>
          <span>
            Followers &nbsp; <strong>1</strong>
          </span>
        </Followage>
      </ProfileData>
      <Feed username={username} />
    </Container>
  );
};

export default ProfilePage;
