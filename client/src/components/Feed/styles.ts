import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  outline: 0;
  cursor: pointer;

  // color: var(--twitter);
  // border-bottom: 2px solid var(--twitter);

  // &:hover {
  //   background: var(--twitter-dark-hover);
  // }

  &:hover,
  &.active {
    color: var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
`;
