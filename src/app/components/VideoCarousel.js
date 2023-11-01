import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/app/contexts/ThemeContext';

const VideoCarousel = () => {
  const arq = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
  ];

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
      console.log("VideoCarousel atualizou");
  }, [theme])

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % arq.length);
    }, 4900);


    return () => clearInterval(interval);
  }, []);  

  return (
    <div className={`pt-2 pb-2 container min-h-screen mx-auto max-w-flex max-w-sm justify-center
    ${theme === 'dark' ? 'bg-stone-600' : 'bg-white'}`}>

      {arq.map((video, index) => (
        <Link href="/products">
          <video
            src={video}
            style={{ height: 'auto', width: 'auto' }}
            autoPlay loop muted
            className={index === currentVideoIndex ? 'visible' : 'hidden'}
          />
        </Link>
      ))}
    </div>
  )
}

export default VideoCarousel;
