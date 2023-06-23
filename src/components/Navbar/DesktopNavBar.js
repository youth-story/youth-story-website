import { Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, AppBar, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { Home, Search, Favorite, Menu, Folder, RecordVoiceOver, LibraryBooks, TrendingUp } from '@material-ui/icons';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link, useLocation } from 'react-router-dom';

export default function MobileNavBar({ isActiveRoute }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // Set the initial state of isDrawerOpen to true

  const drawerItems = [
    { to:"/", label: 'Home', icon: <Home /> },
    { to: '/success-stories', label: 'Success Stories', icon: <TrendingUp /> },
    { to: '/interviews', label: 'Interviews', icon: <RecordVoiceOver /> },
    { to: '/magazine', label: 'Magazine', icon: <LibraryBooks /> },
    { to: '/search', label: 'Search', icon: <Search /> },
    { to:"/resources", label: 'Resources', icon: <Folder /> },
    { to: '/news', label: 'News', icon: <NewspaperIcon /> },
    { to: '/social', label: 'Social', icon: <PeopleIcon /> },
    { to: '/about', label: 'About', icon: <InfoIcon /> },
    { to: '/sponsor', label: 'Sponsor', icon: <AttachMoneyIcon /> },
  ];

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Menu onClick={() => {}} style={{ cursor: 'pointer' }} /> {/* Disable the menu button */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => {}}>
        <List>
          {drawerItems.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.to}
              key={item.label}
              selected={isActiveRoute(item.to)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
