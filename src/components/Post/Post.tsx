import React, { useState } from 'react';
import {
  Container,
  Div,
  Icons,
  Img,
  Interactions,
  NewComment,
  Profile,
  ProfileImg,
  UserComment,
} from './styles';
import {
  RiHeartLine,
  RiChat3Line,
  RiSendPlaneLine,
  RiBookmarkLine,
} from 'react-icons/ri';

const Post: React.FC = () => {
  // const [like, setLike] = useState(30);
  // const [toggleLike, setToggleLike] = useState(false);

  return (
    <Container>
      <Profile>
        <ProfileImg></ProfileImg>
        <h3>Michel Pinto</h3>
      </Profile>

      <Img></Img>

      <Interactions>
        <Icons>
          <RiHeartLine className='icon' />
          <RiChat3Line className='icon' />
          <RiSendPlaneLine className='icon' />
        </Icons>

        <RiBookmarkLine className='icon' />
      </Interactions>

      <Div>
        <h3>130 likes</h3>
        <UserComment>
          <h3>Michel Pinto</h3>
          <p>New post guys, like and share!</p>
        </UserComment>
        <UserComment>
          <h3>Nuno Cohen</h3>
          <p>Awesome content, thanks for sharing</p>
        </UserComment>

        <p className='time'>2 days ago</p>
      </Div>

      <NewComment>
        <input placeholder='Add a new comment...' />
        <button>Post</button>
      </NewComment>
    </Container>
  );
};

export default Post;
