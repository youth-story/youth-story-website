import React from 'react';
import { useMediaQuery, BottomNavigation, BottomNavigationAction, AppBar, Toolbar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import DesktopNavBar from './DesktopNavBar';
import constants from '../../constants/constants';
import MobileNavBar from './MobileNavBar';

export default function Navbar() {
  const isMobile = useMediaQuery(`(max-width: ${constants.mobileWidth})`);
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <React.Fragment>
      {isMobile ? (
        <MobileNavBar isActiveRoute={isActiveRoute} />
      ) : (
        <DesktopNavBar isActiveRoute={isActiveRoute} />
      )}
    </React.Fragment>
  );
}
