import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Breadcrumb from '../layouts/myBreadcrumb/Breadcrumb';
import SideBar from '../layouts/mySideBar/SideBar';

export default function MiniDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      {/* Sub Route base on url after /dashboard/  */}
      <Box component='main' sx={{ postion: 'fixed' }}>
        <Breadcrumb />
        <Outlet />
      </Box>
    </Box>
  );
}
