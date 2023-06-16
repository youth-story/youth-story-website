import { useMediaQuery, BottomNavigation, BottomNavigationAction, AppBar, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { Link, useLocation } from 'react-router-dom';

export default function DesktopNavBar({ isActiveRoute }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    navBar: {
      display: 'flex',
      justifyContent: 'space-between', // Align items along the horizontal axis
      alignItems: 'center', // Align items vertically at the center
      paddingLeft: '8%', // Updated to paddingLeft to create space on the left
      background: isScrolled ? 'dodgerblue' : 'transparent',
      transition: 'background 0.3s ease-in-out',
      borderRadius: 30,
    },
    logo: {
      flex: '0 0 auto',
      width: '4rem',
      alignItems: 'center',
      borderRadius: 10,
    },
    navLinks: {
      display: 'flex',
      justifyContent: 'flex-end', // Align navigation links to the right
      alignItems: 'center', // Align items vertically at the center
      marginRight: '10%',
    },
  };
  

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar style={styles.navBar}>
        <div style={{marginRight: '2%'}}>
          <Link to='/'><img src='/YouthStoryLogo.jpeg' alt='Youth Story Logo' style={styles.logo} /></Link>
        </div>
        <div style={styles.navLinks}>
          <NavLink to="/" active={isActiveRoute('/')} title="Home" />
          <NavLink to="/success-stories" active={isActiveRoute('/success-stories')} title="Success Stories" />
          <NavLink to="/interviews" active={isActiveRoute('/interviews')} title="Interviews" />
          <NavLink to="/magazine" active={isActiveRoute('/magazine')} title="Magazine" />
          <NavLink to="/resources" active={isActiveRoute('/resources')} title="Resources" />
          <NavLink to="/news" active={isActiveRoute('/news')} title="News" />
          <NavLink to="/social" active={isActiveRoute('/social')} title="Social" />
          <NavLink to="/about" active={isActiveRoute('/about')} title="About" />
          <NavLink to="/sponsors" active={isActiveRoute('/sponsors')} title="Sponsor" />
        </div>
      </Toolbar>
    </AppBar>
  );
  
}
