import styled from 'styled-components';

import Button from '../Button';

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
  margin: 10px 0;
`;

export const PostForm = styled.div`
  border: 1px solid var(--gray);
  padding: 10px;
  border-radius: 5px;
  height: 15rem;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
`;

export const CommentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const CommentList = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Comment = styled.div`
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 10px;
  margin: 0 10px;
`;
