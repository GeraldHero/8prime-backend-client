import React, { useState, useEffect } from 'react';
import {
  styled,
  Toolbar,
  AppBar,
  Typography,
  Box,
  Stack,
} from '@mui/material/';

import { grey } from '@mui/material/colors';

import EngineeringIcon from '@mui/icons-material/Engineering';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import BadgeIcons from './badgeIcon/BadgeIcons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reduxConfig/action/userAction';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
}));

const customStyle = {
  hiddenIfViewSmall: {
    display: { xs: 'none', sm: 'block' },
  },
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

const navLink = [
  {
    linkName: 'Home',
    icon: <HomeOutlinedIcon />,
    currentPath: '/login',
    goToPath: '/',
  },
  {
    linkName: 'Login',
    icon: <LoginIcon />,
    currentPath: '/',
    goToPath: '/login',
  },
];

function Navbar() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  // userinfo from redux state
  const { userInfo } = userLogin;
  console.log(userInfo);
  // Check path location to use in navigation.
  const location = useLocation();
  const arr = navLink.filter(
    (item) => item.currentPath === location.pathname.toString()
  );

  // This will show the BadgeIcon component if it is true or login.
  const [isLogin, setIsLogin] = useState(false);

  // This will check autohorize path and links
  const checkPath = [
    '/dashboard',
    '/dashboard/subscribers',
    '/dashboard/accounts',
    '/dashboard/gallerys',
    '/dashboard/projects',
    '/dashboard/settings',
    '/dashboard/sendemail',
  ];
  const authorizePath = checkPath.includes(location.pathname.toString());

  useEffect(() => {
    if (authorizePath) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [userInfo, location]);

  const logoutHandler = () => {
    setIsLogin(false);
    dispatch(logout(userInfo));
  };

  return (
    <AppBar
      sx={{
        backgroundColor: grey[900],
        position: 'sticky',
        // Check path if it is in dashboard routes.
        pl: authorizePath ? 8 : 0,
      }}
    >
      <StyledToolbar>
        <EngineeringIcon sx={customStyle.mainIcon} />
        <Box sx={customStyle.hiddenIfViewSmall}>
          <Typography variant='h5'> 8 Prime </Typography>
          <Typography> Construction and Services</Typography>
        </Box>
        {isLogin ? (
          <BadgeIcons
            logoutHandler={logoutHandler}
            user={userInfo?.user ? userInfo.user.username : 'name'}
          />
        ) : (
          <Stack direction={'row'}>
            {arr.map((item) => (
              <Typography key={item.linkName} variant='h6'>
                <Link to={item.goToPath} style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: grey[100] }} startIcon={item.icon}>
                    {item.linkName}
                  </Button>
                </Link>
              </Typography>
            ))}
          </Stack>
        )}
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
