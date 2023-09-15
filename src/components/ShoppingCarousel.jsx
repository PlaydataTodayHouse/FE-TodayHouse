import React, { useState } from 'react';

function ShoppingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'image1.jpg', link: '/event1' },
    { src: 'image2.jpg', link: '/event2' },
    { src: 'image3.jpg', link: '/event3' },
    { src: 'image4.jpg', link: '/event4' },
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
      maxWidth: '600px',
    },
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 20px',
      fontSize: '1.5rem',
      transition: 'background-color 0.3s',
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
      width: '100%',
      height: 'auto',
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
