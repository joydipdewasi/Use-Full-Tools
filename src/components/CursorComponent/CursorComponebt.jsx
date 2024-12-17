import React from 'react';
import { useState, useEffect } from 'react';

const CursorComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update cursor position
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener to the entire window
    window.addEventListener('mousemove', updateMousePosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed', // 'fixed' ensures it follows the entire window
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: 'translate(-5%, 90%)', // Centers the div under the cursor
    padding: '10px',
    background: 'linear-gradient(55deg, white, purple)',
    borderRadius: '50%',
    pointerEvents: 'none', // Prevents the div from interfering with other interactions
  };

  return <div style={cursorStyle}></div>;
};

export default CursorComponent;
