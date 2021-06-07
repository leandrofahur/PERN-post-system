import styled from 'styled-components';

import Button from '../Button';
import TextArea from '../TextArea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;

  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const TweetForm = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding-top: 15px;
`;

export const PostButton = styled(Button)`
  border-radius: 5px;
  padding: 5px 12px;
  margin-top: 10px;
`;

export const Post = styled(TextArea)``;
