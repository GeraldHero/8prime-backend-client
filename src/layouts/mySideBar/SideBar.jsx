import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Link from '@mui/material/Link';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reduxConfig/action/userAction';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import MailIcon from '@mui/icons-material/Mail';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SendIcon from '@mui/icons-material/Send';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const listItems = [
  //   {
  //     name: 'Dashboard',
  //     icon: <DashboardCustomizeIcon />,
  //     path: '/dashboard',
  //   },

  {
    name: 'Projects',
    icon: <AccountTreeIcon />,
    path: '/dashboard/projects',
  },
  {
    name: 'Subscribers/Inbox',
    icon: <MailIcon />,
    path: '/dashboard/subscribers',
  },
  {
    name: 'Send Email',
    icon: <SendIcon />,
    path: '/dashboard/sendemail',
  },

  {
    name: 'Gallery',
    icon: <MonochromePhotosIcon />,
    path: '/dashboard/gallerys',
  },
  {
    name: 'Settings',
    icon: <SettingsIcon />,
    path: '/dashboard/settings',
  },
  {
    name: 'My Account',
    icon: <ManageAccountsIcon />,
    path: '/dashboard/accounts',
  },
  //   {
  //     name: 'Logout',
  //     icon: <LogoutIcon />,
  //     path: '/login',
  //   },
];

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;

  useEffect(() => {
    if (!userInfo && !loading) navigate('/login');
  }, [userInfo, loading, navigate]);

  const logoutHandler = () => {
    dispatch(logout(userInfo));
  };

  return (
    <Drawer variant='permanent' open={open}>
      <DrawerHeader sx={{ p: '8px 26px', ml: 3.5, mt: 1 }}>
        {!open ? (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />{' '}
          </IconButton>
        )}
      </DrawerHeader>

      <List>
        <Link
          component={NavLink}
          to='/dashboard'
          sx={{ textDecoration: 'none', color: '#15133C' }}
        >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#EC994B',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardCustomizeIcon />
              </ListItemIcon>
              <ListItemText
                primary='Dashboard'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        {listItems.map((item, idx) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: 'none',
                    color: '#73777B',
                  }
                : { textDecoration: 'none', color: '#15133C' }
            }
          >
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#EC994B',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              {item.name === 'Gallery' && <Divider />}
            </ListItem>
          </NavLink>
        ))}

        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={logoutHandler}
          >
            <ListItemIcon
              sx={{
                color: '#EC994B',
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
