import React from 'react';
import './Header.css';
import D2DLogo from './D2DLogo.png';

const Header = () => {
  return (
    <div className="Header">
      <img className='logo' src={D2DLogo} alt='D2D Logo' />
      <div className='text'>
          <div>WELCOME BACK!</div>
      </div>
    </div>
  );
};

export default Header;
