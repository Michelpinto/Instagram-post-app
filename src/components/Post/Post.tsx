import React, { useRef, useState, useEffect } from 'react';
import {
  Container,
  Div,
  Icons,
  ImgBlock,
  Interactions,
  NewComment,
  OwnerComment,
  Profile,
  ProfileImg,
  UserComment,
} from './styles';
import {
  RiHeartLine,
  RiChat3Line,
  RiSendPlaneLine,
  RiBookmarkLine,
  RiDeleteBin7Line,
} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment } from '../../app/data/dataSlice';
import { getImages } from '../../app/data/ImageSlice';
import { AppDispatch } from '../../app/store';

const Post: React.FC = () => {
  const [like, setLike] = useState(30);
  const [toggleLike, setToggleLike] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLInputElement>(null);
  const comments = useSelector((state: any) => state.comment);
  const data = useSelector((state: any) => state.image);

  const handleToggle = () => {
    setToggleLike(!toggleLike);
    setLike(toggleLike ? like - 1 : like + 1);
    console.log('toggleLike', toggleLike);
  };

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === '') {
      return null;
    }
    dispatch(addComment(text));
    setText('');
  };

  const handleClickFocus = () => {
    ref?.current?.focus();
  };

  const handleDelete = (id: string) => {
    dispatch(deleteComment(id));
    console.log('id', id);
  };

  useEffect(() => {
    dispatch(getImages());
    console.log(data.images);
  }, [dispatch]);

  return (
    <Container>
      <Profile>
        <ProfileImg></ProfileImg>
        <h3>Michel Pinto</h3>
      </Profile>

      <ImgBlock>
        {data.images.map((image: any) => (
          <img src={image.download_url} alt='post' />
        ))}
      </ImgBlock>

      <Interactions>
        <Icons>
          <RiHeartLine
            className={`'icon-heart icon-active' ${
              toggleLike ? 'icon-active' : 'icon-heart'
            }`}
            onClick={handleToggle}
          />
          <RiChat3Line onClick={handleClickFocus} className='icon' />
          <RiSendPlaneLine className='icon' />
        </Icons>

        <RiBookmarkLine className='icon' />
      </Interactions>

      <Div>
        <h3>{like} likes</h3>
        <OwnerComment>
          <h3>Michel Pinto</h3>
          <p>New post guys, like and share!</p>
        </OwnerComment>

        {comments.map((comment: any) => (
          <UserComment key={comment.id}>
            <div>
              <h3>comment</h3>
              <p>{comment.text}</p>
            </div>
            <RiDeleteBin7Line
              onClick={handleDelete.bind(null, comment.id)}
              className='icon-del'
            />
          </UserComment>
        ))}

        <p className='time'>2 days ago</p>
      </Div>

      <NewComment onSubmit={handleSubmit}>
        <input
          type='text'
          ref={ref}
          onChange={handleComment}
          value={text}
          placeholder='Add a new comment...'
        />
        <button type='submit'>Post</button>
      </NewComment>
    </Container>
  );
};

export default Post;
