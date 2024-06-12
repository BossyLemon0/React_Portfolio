import React from 'react';
import { useInView } from 'react-intersection-observer';

const CircleImage = ({ frameColor, imageUrl }) => {
const {ref, inView} = useInView({
  triggerOnce:true,
  rootMargin:'100px 0px'
})

  return <div ref={ref} className='myPictureFrame' >
    <img  className='myPicture'  src={`${process.env.PUBLIC_URL}/images/myNikePic.jpg`} alt="My Picture" />
  </div>;
};

export default CircleImage;