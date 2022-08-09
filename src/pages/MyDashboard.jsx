import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import Breadcrumb from '../layouts/myBreadcrumb/Breadcrumb';
import SideBar from '../layouts/mySideBar/SideBar';

export default function MiniDrawer() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;
  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo?.token) {
      if (loading) navigate('/login');
    }
  }, [navigate, userInfo, loading]);

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
