import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import D2DLogo from './D2DLogo.png';
import LogoutModal from './LogoutModal';
import './DrawerAppBar.css';
import { useNavigate, useLocation } from 'react-router';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedNavItem, setSelectedNavItem] = React.useState(null);
  const navItems = props.navItems;
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    closeModal();
    const token = localStorage.getItem('token');
    if (!token)
      navigate('/login');
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.label !== 'Logout' ? (
              <Link
              className={item.label == 'Logout' || item.label == 'Sign Up' ? 'special' : undefined}
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'red',
                  marginTop: '10px',
                  borderRadius:
                    item.label === 'Sign Up' || item.label === 'Logout'
                      ? '10px'
                      : undefined,
                  background:
                    item.label === 'Sign Up' || item.label === 'Logout'
                      ? '#850202'
                      : undefined,
                  padding:
                    item.label === 'Sign Up' || item.label === 'Logout'
                      ? '10px'
                      : undefined,
                  color:
                    item.label === 'Sign Up' || item.label === 'Logout'
                      ? 'white'
                      : '#850202',
                }}
                to={item.link}
              >
                <ListItem
                  disablePadding
                  sx={{
                    textAlign: 'center',
                    borderBottom:
                      selectedNavItem === item.label ? '2px solid red' : 'none',
                  }}
                >
                  <ListItemButton
                    sx={{
                      textAlign: 'center',
                      borderBottom:
                        selectedNavItem === item.label
                          ? '4px solid red'
                          : 'none',
                    }}
                    onClick={
                      item.label === 'Logout'
                        ? openModal
                        : undefined
                    }
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ component: 'span' }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          width: selectedNavItem === item.label ? '10px' : '0',
                          height: '4px',
                        }}
                      />
                      {item.label}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ) : (
              <React.Fragment>
                <ListItem
                  disablePadding
                  sx={{
                    textAlign: 'center',
                    borderBottom:
                      selectedNavItem === item.label ? '2px solid red' : 'none',
                  }}
                >
                  <ListItemButton
                    sx={{
                      textAlign: 'center',
                      borderBottom:
                        selectedNavItem === item.label
                          ? '4px solid red'
                          : 'none',
                    }}
                    onClick={openModal}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ component: 'span' }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          width: selectedNavItem === item.label ? '10px' : '0',
                          height: '4px',
                        }}
                      />
                      {item.label}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <LogoutModal
                  showModal={showModal}
                  handleClose={closeModal}
                  handleLogout={handleLogout}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
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
              <img style={{ width: '40px', height: '40px' }} src={D2DLogo} alt='D2D Logo' />
              <span style={{ fontWeight: 'bolder' }}>YOUTH STORY</span>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <React.Fragment>
             <Link
             to={item.label !== 'Logout' ? item.link : undefined}
             className={item.label === 'Logout' || item.label === 'Sign Up' ? 'special' : 'regular'}
             onClick={item.label === 'Logout' ? openModal : undefined}
           >
             {item.label}
             {selectedNavItem && item.label === selectedNavItem && (
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
           {item.label === 'Logout' && showModal && (
             <LogoutModal
               showModal={showModal}
               handleClose={closeModal}
               handleLogout={handleLogout}
             />
           )}
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
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
