import * as React from 'react';
import {
  Badge,
  Stack,
  Typography,
  IconButton,
  Avatar,
  Box,
  styled,
  MenuItem,
  Menu,
  Button,
} from '@mui/material/';
import Notifications from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { grey } from '@mui/material/colors';

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
    icon: <MailIcon sx={customStyle.icon} />,
    badgeContent: 4,
  },
  {
    icon: <Notifications sx={customStyle.icon} />,
    badgeContent: 2,
  },
];

const BadgeIcons = () => {
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
        {iconDisplay.map((item) => (
          <IconButton>
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
        <Avatar alt='Remy Sharp' src='https://picsum.photos/200/300' />
        <Typography variant='h6' px='20px'>
          John
        </Typography>
      </Button>

      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <CustomeMenuItem>Notification</CustomeMenuItem>
        <CustomeMenuItem>Message</CustomeMenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export default BadgeIcons;
