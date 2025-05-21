import * as React from 'react';
import { Fragment } from "react";
import "../App.css";

// ** MUI Imports
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Projects', "Resume"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
   <Fragment>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0.5px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sajid Ansari
          </Typography>

          <Box sx={{ flexGrow: 1, justifyContent:'flex-end', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', '& a': {
                  textDecoration: 'none',
                  color: 'inherit',
                } }}>                    
                    <Link color="#e0e0e0"  to={`${page.toLowerCase()}`} sx={{
                      ' a': {
                        textDecoration: 'none',
                        color: 'inherit',
                      }
                    }}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0.5px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sajid Ansari
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', '& a': {
                  textDecoration: 'none',
                  color: 'inherit',
                } }}
              >
                <Link color="#e0e0e0"  to={`${page.toLowerCase()}`} sx={{
                  ' a': {
                    textDecoration: 'none',
                    color: 'inherit',
                  }
                }}>
                      {page}
                  </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Avatar alt="Remy Sharp" src="/images/profile.png" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Fragment>
  );
};

export default Header;
