import React, { useRef, useEffect } from 'react';
import './Laptop.css';

const Laptop = () => {
  const iframeRef = useRef(null);
  const videoUrl = 'https://streamable.com/vgflh4?src=player-page-share';

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }, []);

  return (
    <div className="laptop-frame">
      <div className="laptop-screen">
        <iframe
          ref={iframeRef}
          title="Streamable Video"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Laptop;
