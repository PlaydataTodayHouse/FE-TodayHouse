import React, { useState } from 'react';

function ShoppingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/saleEvent1.jpeg?raw=true', link: '/event1' },
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/saleEvent2.jpeg?raw=true', link: '/event2' },
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/saleEvent3.jpeg?raw=true', link: '/event3' },
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/saleEvent4.jpg?raw=true', link: '/event4' }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      maxWidth: '1920px',
    },
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 20px',
      fontSize: '1.5rem',
      transition: 'background-color 0.3s',
      borderRadius: '50%', // 원형 버튼을 위한 스타일
      width: '40px',  // 원의 크기 조절
      height: '40px', // 원의 크기 조절
    },
    prevButton: {
      position: 'absolute',
      left: '-50px',
    },
    nextButton: {
      position: 'absolute',
      right: '-50px',
    },
    image: {
      width: '1920px',
      height: '320px',
      display: 'block',
    },
  };

  return (
    <div style={styles.container}>
      <button style={{ ...styles.button, ...styles.prevButton }} onClick={handlePrev}>&lt;</button>
      <a href={images[currentIndex].link}>
        <img src={images[currentIndex].src} alt={`Event ${currentIndex + 1}`} style={styles.image} />
      </a>
      <button style={{ ...styles.button, ...styles.nextButton }} onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default ShoppingCarousel;