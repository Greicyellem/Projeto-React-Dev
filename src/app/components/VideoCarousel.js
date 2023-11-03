import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/app/contexts/ThemeContext';
import '../globals.css';

const VideoCarousel = () => {
  const arq = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video4.mp4',
    '/video5.mp4',
    '/video6.mp4',
  ];

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("VideoCarousel atualizou");
  }, [theme]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % arq.length);
    }, 4900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='carousel'>
        {arq.map((video, index) => (
          <Link href="/products" key={index}>
            <video
              src={video}
              autoPlay
              loop
              muted
              className={index === currentVideoIndex ? 'visible' : 'hidden'}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

