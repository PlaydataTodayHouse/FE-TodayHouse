import React, { useState, useEffect } from 'react';
import ArrowButton from './ArrowButton';

function ShoppingCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const images = [
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/eventCarouselSlide/ImageEvent1.png?raw=true', link: '/event1' },
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/eventCarouselSlide/ImageEvent2.png?raw=true', link: '/event2' },
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/eventCarouselSlide/ImageEvent3.png?raw=true', link: '/event3' },
    { src: 'https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/eventCarouselSlide/ImageEvent4.png?raw=true', link: '/event4' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

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
      overflow: 'hidden',
    },
    button: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      flexShrink: 0,
      opacity: hover ? 1 : 0,
      transition: 'opacity 0.3s',
    },
    prevButton: {
      position: 'absolute',
      left: '5rem',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    nextButton: {
      position: 'absolute',
      right: '5rem',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    image: {
      width: '1920px',
      height: '380px',
      display: 'block',
    },
  };

  return (
    <div 
      style={styles.container} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <button style={{ ...styles.button, ...styles.prevButton }} onClick={handlePrev}>
        <ArrowButton direction="left" />
      </button>
      <a href={images[currentIndex].link}>
        <img src={images[currentIndex].src} alt={`Event ${currentIndex + 1}`} style={styles.image} />
      </a>
      <button style={{ ...styles.button, ...styles.nextButton }} onClick={handleNext}>
        <ArrowButton direction="right" />
      </button>
    </div>
  );
}

export default ShoppingCarousel;