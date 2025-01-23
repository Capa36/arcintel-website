import { useEffect, useState } from 'react';

export const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setOffset(scrollPosition * 0.5); // Adjust the multiplier to control scroll speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offset;
}; 