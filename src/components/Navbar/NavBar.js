import React from 'react';
import { useMediaQuery, BottomNavigation, BottomNavigationAction, AppBar, Toolbar } from '@material-ui/core';
import { Home, Search, Favorite } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <React.Fragment>
      {isMobile ? (
        <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <BottomNavigation showLabels>
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                icon={<Home />}
                selected={isActiveRoute('/')}
              />
              <BottomNavigationAction
                component={Link}
                to="/search"
                label="Search"
                icon={<Search />}
                selected={isActiveRoute('/search')}
              />
              <BottomNavigationAction
                component={Link}
                to="/favorite"
                label="Favorite"
                icon={<Favorite />}
                selected={isActiveRoute('/favorite')}
              />
            </BottomNavigation>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title='Home' />
            <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title='About' />
            <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title='Timepass' />
          </Toolbar>
        </AppBar>
      )}
    </React.Fragment>
  );
}
