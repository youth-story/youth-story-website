import React from 'react';
import './Header.css';
import D2DLogo from './D2DLogo.png';

const Header = () => {
  return (
    <div className="Header">
      <img className='logo' src={D2DLogo} alt='D2D Logo' />
      <div className='text'>
          <div>JOIN THE <span className='highlight'>D2D</span> COMMUNITY!</div>
      </div>
    </div>
  );
};

export default Header;
