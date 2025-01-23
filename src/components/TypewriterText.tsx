import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const TypewriterText = ({ text, speed = 50, delay = 0 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return <span>{displayText}</span>;
}; 