import { useMediaQuery, BottomNavigation, BottomNavigationAction, AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import NavLink from './NavLink';
import { Link, useLocation } from 'react-router-dom';

export default function DesktopNavBar({isActiveRoute}) {

    return (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title='Home' />
            <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title='About' />
            <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title='Timepass' />
          </Toolbar>
        </AppBar>
    );

}