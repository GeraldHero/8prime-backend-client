import * as React from 'react';
import {
  Badge,
  Stack,
  Typography,
  IconButton,
  Box,
  styled,
  MenuItem,
  Menu,
  Button,
} from '@mui/material/';
import Notifications from '@mui/icons-material/Notifications';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const customStyle = {
  icon: {
    color: grey[100],
    width: 25,
    height: 30,
  },
};

// It will hide icon with badge when screen is small.
const DisplayIconBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
// It will hide menuItem when screen is large.
const CustomeMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const iconDisplay = [
  {
    name: 'notification',
    icon: <Notifications sx={customStyle.icon} />,
    badgeContent: 2,
  },
];

const BadgeIcons = ({ logoutHandler, user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction='row' spacing={{ xs: 2, lg: 3 }} alignItems='center'>
      <DisplayIconBox>
        {iconDisplay.map((item, idx) => (
          <IconButton key={item.name}>
            <Badge badgeContent={item.badgeContent} color='error'>
              {item.icon}
            </Badge>
          </IconButton>
        ))}
      </DisplayIconBox>

      <Button
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography variant='h6' px='20px' color='white'>
          {user}
        </Typography>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <CustomeMenuItem>Notification</CustomeMenuItem>
        <CustomeMenuItem>Message</CustomeMenuItem>
        <MenuItem>
          <Link
            to='/dashboard'
            style={{ textDecoration: 'none', color: '#000000' }}
          >
            Dashboard
          </Link>
        </MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={logoutHandler}>
          <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default BadgeIcons;
