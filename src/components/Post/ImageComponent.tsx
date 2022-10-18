import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../app/data/ImageSlice';
import { AppDispatch } from '../../app/store';
import { ImgBlock } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const ImageComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.image);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <ImgBlock>
      <Swiper navigation={true} modules={[Navigation]}>
        {data.images.map((image: any) => (
          <SwiperSlide key={image.id}>
            <img src={image.download_url} alt='post' />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImgBlock>
  );
};

export default ImageComponent;
