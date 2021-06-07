import React from 'react';

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

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>
        <h1>Leandro</h1>
        <h2>@leandro</h2>

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
      <Feed />
    </Container>
  );
};

export default ProfilePage;
