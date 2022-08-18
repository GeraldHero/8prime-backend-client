import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import SubscriberTable from './SubscriberTable';
import { useDispatch } from 'react-redux';
import { removeSubscribersList } from '../../../reduxConfig/action/subscriberAction';

const style = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '80vw',
    margin: '20px auto',
  },
};

export const Subscribers = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const dispatch = useDispatch();

  // If page or limit has change the value, it will call the dispatch from redux. cleanup method will be use
  useEffect(() => {
    // return () => {
    //   dispatch(removeSubscribersList());
    //   setShouldRender(true);
    // };
  }, [dispatch]);

  if (shouldRender) return null;
  return (
    <Box sx={style.mainBox}>
      <SubscriberTable />
    </Box>
  );
};

export default Subscribers;
