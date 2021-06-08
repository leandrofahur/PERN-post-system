import styled, { css } from 'styled-components';
import Button from '../Button';

import { User, Email } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--black);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--black);
  width: min(601px, 100%);
  margin: auto;
  justify-content: center;
  align-items: center;
  align-content: center;

  // margin-top: 90px;
  border: 1px solid var(--white);
  padding: 30px;

  border-radius: 5px;
  margin-top: 100px;
`;

export const SignSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  border-radius: 5px;
  padding: 5px 12px;
  margin-top: 10px;
  color: var(--white);
  background: green;
  border: 1px solid green;
  width: 100%;
`;

export const GuestButton = styled(Button)`
  border-radius: 5px;
  padding: 5px 12px;
  margin-top: 10px;
  background: var(--twitter);
  color: var(--white);
  border: 1px solid var(--twitter);
  width: 100%;
`;

const IconCSS = css`
  width: 27px;
  height: 27px;
  background: var(--gray);
  fill: bar(--black);
  margin-right: 5px;
  padding: 1px 1px;
`;

export const UserIcon = styled(User)`
  ${IconCSS}
`;

export const EmailIcon = styled(Email)`
  ${IconCSS}
`;

export const FieldForm = styled.div`
  border: 1px solid var(--gray);
  margin: 5px;
  border-radius: 5px;
`;

export const GuestSection = styled.div`
  justify-content: center;
  align-items: center;
`;
