import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItemButton, ListItemText, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@mui/material/styles/styled';
import Products from '../Pages/Products';

// Create a styled component for the IconButton
const MenuIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// Create a styled component for the Title
const LogoTypography = styled(Typography)({
  flexGrow: 1,
});

// Create a styled component for the Drawer List
const DrawerList = styled('div')(({ theme }) => ({
  width: 250,
}));

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && 'type' in event && (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Use the styled components */}
        <MenuIconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MenuIconButton>
        <LogoTypography variant="h6">
            Inventory Management System
        </LogoTypography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/products" color="inherit">Products</Button>
        <Button component={Link} to="/inventory" color="inherit">Inventory</Button>
      </Toolbar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <DrawerList onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/products">
              <ListItemText primary="Products" />
            </ListItemButton>
            <ListItemButton component={Link} to="/inventory">
              <ListItemText primary="Inventory" />
            </ListItemButton>
          </List>
        </DrawerList>
      </Drawer>
    </AppBar>
    
  );
};

export default Navbar;