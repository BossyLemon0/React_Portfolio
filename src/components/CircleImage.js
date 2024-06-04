import React from 'react';

const CircleImage = ({ frameColor, imageUrl }) => {
  const circleStyle = {
    width: '9rem', // Adjust as needed
    height: '9rem', // Adjust as needed
    borderRadius: '50%',
    border: `2px solid ${frameColor}`,
    // backgroundImage: `url(${imageUrl})`,
    // backgroundImage: "url(/logo192.png)",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/myNikePic.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
  };

  return <div style={circleStyle}></div>;
};

export default CircleImage;