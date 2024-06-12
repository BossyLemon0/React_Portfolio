import React from 'react';
import { useInView } from 'react-intersection-observer';

const CircleImage = ({ frameColor, imageUrl }) => {
const {ref, inView} = useInView({
  triggerOnce:true,
  rootMargin:'100px 0px'
})

  const circleStyle = {
    width: '9rem', // Adjust as needed
    height: '9rem', // Adjust as needed
    borderRadius: '50%',
    border: `2px solid ${frameColor}`,
    // backgroundImage: `url(${imageUrl})`,
    // backgroundImage: "url(/logo192.png)",
    backgroundImage: inView ?`url(${process.env.PUBLIC_URL + '/images/myNikePic.jpg'})`: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
  };

  return <div ref={ref} style={circleStyle}></div>;
};

export default CircleImage;