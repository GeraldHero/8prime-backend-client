import React from 'react';
import { Box } from '@mui/material';

import SubscriberTable from './SubscriberTable';

const style = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '80vw',
    margin: '20px auto',
  },
};

export const Subscribers = () => {
  return (
    <Box sx={style.mainBox}>
      <SubscriberTable />
    </Box>
  );
};

export default Subscribers;
