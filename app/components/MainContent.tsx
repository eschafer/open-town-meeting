import { useState } from 'react';
import { Link, NavLink, Outlet } from '@remix-run/react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';
import { useAuth } from '~/contexts/AuthProvider';

export default function MainContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, signIn, signOut } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Tooltip title="Account">
              <IconButton
                onClick={handleClick}
                size="small"
                // TODO: aria controls
              >
                <Avatar>
                  {!user && <PersonIcon />}
                  {user && user.displayName[0]}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              id="account-menu"
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
