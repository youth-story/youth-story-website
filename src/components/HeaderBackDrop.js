import React from 'react';

export default function HeaderBackDrop({ imgSrc, title, info }) {
  const backgroundStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderBottomLeftRadius: '25%',
    borderBottomRightRadius: '25%',
    height: '60vh', // Adjust the height as needed
    width: '100%',
  };

  const containerStyle = {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '5%',
  };

  const titleStyle = {
    color: 'white',
    marginBottom: '10px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    // marginTop: '12vh',
  };

  const infoStyle = {
    color: 'white',
    wordWrap: 'break-word',
    fontSize: '1.5rem',
  };

  return (
    <div>
      <div className="background-image" style={backgroundStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <p style={infoStyle}>{info}</p>
        </div>
      </div>
    </div>
  );
}
