import { useState, useEffect } from 'react';

export const useParallax = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setScrollOffset(offset * 0.5); // Adjust multiplier for parallax intensity
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollOffset;
}; 