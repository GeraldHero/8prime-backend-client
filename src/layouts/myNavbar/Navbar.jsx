import React from 'react';
import { useState } from 'react';
import {
  styled,
  Toolbar,
  AppBar,
  Typography,
  Box,
  Stack,
  Container,
} from '@mui/material/';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { grey } from '@mui/material/colors';
import BadgeIcons from './badgeIcon/BadgeIcons';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px',
}));

const customStyle = {
  hiddenIfViewSmall: { display: { xs: 'none', sm: 'block' } },
  hiddenIfViewLarge: { display: { xs: 'block', sm: 'none' } },
  mainIcon: {
    display: { xs: 'block', sm: 'none' },
    width: 45,
    height: 50,
    paddingLeft: '20px',
    color: grey[100],
  },
  icon: {
    color: grey[100],
    width: 30,
    height: 30,
  },
};

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHundle = () => setIsLogin(true);
  return (
    <AppBar sx={{ backgroundColor: grey[900], position: 'sticky' }}>
      <Container>
        <StyledToolbar>
          <EngineeringIcon sx={customStyle.mainIcon} />
          <Box sx={customStyle.hiddenIfViewSmall}>
            <Typography variant='h5'> 8 Prime </Typography>
            <Typography> Construction and Services</Typography>
          </Box>

          {isLogin ? (
            <BadgeIcons />
          ) : (
            <Stack>
              <Typography variant='h6'>
                <Button
                  onClick={loginHundle}
                  sx={{ color: grey[100] }}
                  startIcon={<LoginIcon />}
                >
                  Login
                </Button>
              </Typography>
            </Stack>
          )}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

// <AppBar position='static'>
//         <Toolbar>
//           <IconButton
//             size='large'
//             edge='start'
//             color='inherit'
//             aria-label='menu'
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color='inherit'>Login</Button>
//         </Toolbar>
//       </AppBar>
