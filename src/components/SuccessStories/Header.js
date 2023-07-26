import React, { useState, useEffect } from 'react';
import './Header.css';
import mousePic from './mouse.png';
import D2DLogo from './D2DLogo.png';
import Typewriter from "typewriter-effect";
import YouTube from 'react-youtube';

export default function Header({ title }) {
  const jobs = ['Entrepreneurs', 'Coders', 'Researchers', 'Artists'];
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 3000); // Change the word every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [jobs.length]);

  return (
    <div className="header-container">
      <div className="logo-title">
        <img className="logo" src={D2DLogo} alt="D2D Logo" />
        <h1 className="header-title">{title}</h1>
      </div>
      <p className="header-description">
        Check out most recent articles, we provide unique stories from some of India's top teen{' '}
        <br />
        <span style={{ color: 'darkred', fontWeight: 'bolder', fontSize: '1.6rem' }}>
        <Typewriter
          options={{
            strings: jobs,
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
        </span>
      </p>
      <p className="header-motivate">Inspire. Motivate. Transform</p>
      <br />
      <img src={mousePic} className="mouse-image" alt="mouse image" />
    </div>
  );
}
