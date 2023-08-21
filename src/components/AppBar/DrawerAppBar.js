import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import D2DLogo from './D2DLogo.png';

const drawerWidth = 240;
const navItems = ['About', 'Success-stories', 'Contests', 'Sign-up'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedNavItem, setSelectedNavItem] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <Link style={{textDecoration: 'none', color: '#850202'}} to={`/${item.charAt(0).toLowerCase() + item.slice(1)}`}>
          <ListItem
            key={item}
            disablePadding
            sx={{
              textAlign: 'center',
              borderBottom: selectedNavItem === item ? '2px solid red' : 'none',
            }}
          >
            <ListItemButton
              sx={{
                textAlign: 'center',
                borderBottom: selectedNavItem === item ? '4px solid red' : 'none',
              }}
              onClick={() => handleNavItemClick(item)}
            >
              <ListItemText primary={item} primaryTypographyProps={{ component: 'span' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: selectedNavItem === item ? '10px' : '0',
                    height: '4px',
                    backgroundColor: 'red',
                    marginTop: '10px', // Adjust the value to position the line correctly
                  }}
                />
                {item}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#fff', borderRadius: '10px' }}>
        <Toolbar sx={{ paddingLeft: '20px', paddingRight: '20px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            style={{ color: '#850202' }}
          >
            <MenuIcon />
         </IconButton>
              <Typography variant="h6" component="div" sx={{ paddingRight: '16px', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <img style={{width: '40px', height: '40px'}} src={D2DLogo} alt='D2D Logo'/>
              <span style={{fontWeight: 'bolder'}}>YOUTH STORY</span>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
  {navItems.map((item, index) => (
    <React.Fragment key={item}>
      <Link
        to={`/${item.charAt(0).toLowerCase() + item.slice(1)}`}
        style={{
          fontWeight: 'revert-layer',
          color: '#850202',
          position: 'relative',
          textDecoration: 'none',
          paddingBottom: selectedNavItem && item === selectedNavItem ? '4px' : undefined,
          marginRight: index !== navItems.length - 1 ? '50px' : undefined,
        }}
      >
        {item}
        {selectedNavItem && item === selectedNavItem && (
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '3px',
              backgroundColor: 'red',
            }}
          />
        )}
      </Link>
    </React.Fragment>
  ))}
</Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '64px' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          {/* Your content goes here */}
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
