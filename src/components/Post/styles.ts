import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 47rem;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  padding: 1.8rem 0;
  margin: auto;
`;

export const Profile = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`;

export const ProfileImg = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #d7d7d7;
  margin-right: 1rem;
`;

export const Img = styled.div`
  background-color: #d7d7d7;
  width: 100%;
  height: 38rem;
`;

export const like = keyframes`
0%   { transform: scale(1); }
  90%   { transform: scale(1.2); }
  100% { transform: scale(1.1); }

`;

export const Interactions = styled.div`
  padding: 1.8rem;
  display: flex;
  justify-content: space-between;
  font-size: 2.4rem;

  & .icon:hover {
    color: #d7d7d7;
    cursor: pointer;
  }

  & .icon-heart {
    stroke: black;
  }

  & .icon-heart:hover {
    color: #d7d7d7;
    cursor: pointer;
  }

  & .icon-active {
    animation: ${like} 0.5s 1;
    fill: red;
    stroke: none;
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 1.8rem 1.8rem 1.8rem;

  & .time {
    color: #d7d7d7;
  }
`;

export const UserComment = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font-size: 12px;
  }
`;
export const NewComment = styled.div`
  border-top: 1px solid #d7d7d7;
  display: flex;
  padding: 1.8rem 1.8rem 0 1.8rem;

  & input {
    width: 100%;
    border: none;
    outline: none;

    &::placeholder {
      color: #d7d7d7;
    }
  }

  & button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    color: #40a3ff;
  }
`;
