import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Add/remove the Google Sign-In script to the DOM
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add/remove a callback when the Google Sign-In button is clicked
  useEffect(() => {
    window.handleCredentialResponse = async (credential) => {
      await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: credential,
        }),
      }).then(async (response) => {
        if (response.ok) {
          // const authData = await response.json();
        } else {
          console.error(
            'Auth.js Error:',
            response.status,
            response.statusText,
            response,
          );
        }
      });
    };

    // Clean up the function when the component is unmounted
    return () => {
      delete window.handleCredentialResponse;
    };
  }, []);

  const GOOGLE_CLIENT_ID =
    '72845727988-iquthaap2ui57ttr9rfefuvu5imlank3.apps.googleusercontent.com';

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Open Town Meeting
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <div
                  id="g_id_onload"
                  data-client_id={GOOGLE_CLIENT_ID}
                  data-callback="handleCredentialResponse"
                  data-auto_prompt="false"
                ></div>
                <div
                  className="g_id_signin"
                  data-type="standard"
                  data-size="large"
                  data-theme="outline"
                  data-text="sign_in_with"
                  data-shape="rectangular"
                  data-logo_alignment="left"
                ></div>
              </MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
