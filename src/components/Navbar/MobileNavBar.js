import { useMediaQuery, BottomNavigation, BottomNavigationAction, AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { Home, Search, Favorite } from '@material-ui/icons';
import NavLink from './NavLink';
import { Link, useLocation } from 'react-router-dom';

export default function MobileNavBar({isActiveRoute}) {

    return (
        <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <BottomNavigation showLabels>
              <BottomNavigationAction
                component={Link}
                to="/sponsors"
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
    );

}