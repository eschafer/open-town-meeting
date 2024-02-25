import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from '@remix-run/react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Link as MuiLink,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  GoogleAuthProvider,
  signInWithCustomToken,
  signInWithPopup,
} from 'firebase/auth';
import { useAuth } from '~/contexts/AuthProvider';
import { completeGoogleSignIn } from '~/utils';

export default function MainContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, signIn, signOut } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.handleCredentialResponse = async (response) => {
      // exchange the google credential for a firebase token, and validate the token, then store the token in a session
      const signInResponse = await completeGoogleSignIn(response);
      const data = await signInResponse.json();
    };

    // Clean up the function when the component is unmounted
    return () => {
      delete window.handleCredentialResponse;
    };
  }, []);

  const navLinks = [
    { to: '/town-meeting', label: 'Town Meeting' },
    { to: '/warrant-articles', label: 'Warrant Articles' },
    { to: '/town-meeting-members', label: 'Town Meeting Members' },
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: '#ffffff' }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Toolbar
          sx={{
            backgroundColor: '#ffffff',
            color: '#202124',
            textDecoration: 'none',
          }}
        >
          {/*<IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>*/}
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: '#202124', textDecoration: 'none' }}>
              Open Town Meeting
            </Link>
          </Typography>
          <Stack
            component="ul"
            direction="row"
            spacing={0}
            alignItems="center"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              margin: '0 -1rem',
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <Box
                component="li"
                key={link.to}
                sx={{
                  display: 'inline-block',
                }}
              >
                <MuiLink
                  component={NavLink}
                  to={link.to}
                  underline="none"
                  display="inline-block"
                  sx={{
                    position: 'relative',
                    padding: '1rem',

                    '&.active::after': {
                      backgroundColor: '#2672de',
                      borderRadius: '0',
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      height: '.25rem',
                      left: '1rem',
                      right: '1rem',
                      bottom: '0',
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    component="div"
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    {link.label}
                  </Typography>
                </MuiLink>
              </Box>
            ))}
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!user && (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    signIn();
                  }}
                >
                  Sign in
                </MenuItem>
              )}
              {user && (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    signOut();
                  }}
                >
                  Sign out
                </MenuItem>
              )}
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        id="main-content"
        flexGrow={1}
        sx={{ padding: '1.5rem 0 3rem' }}
      >
        <Container>
          <Outlet />
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{
          background: '#2d2e2f',
          color: '#ffffff',
          fontSize: '1rem',
        }}
      >
        <Container>
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              '& a': {
                color: '#ffffff',
              },
            }}
          >
            <Box component="li">
              <Link to="/accessibility">Accessibility</Link>
            </Box>
            <Box component="li">
              <Link to="/privacy">Privacy Policy</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
