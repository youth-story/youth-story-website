import React from 'react';
import './Video.css';

export default function Video() {
  return (
    <div id='mission' className='video-container'>
      <h1>The Mission</h1>
      <h3>We are on a mission to empower the youth to become<br />better than yesterday</h3>
      <div className='video-wrapper'>
        <iframe
          src="https://www.youtube.com/embed/kOgfmmv9Fhc?autoplay=1&mute=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}