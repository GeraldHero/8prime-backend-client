import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribersList } from '../../../reduxConfig/action/subscriberAction';
import SubscriberTable from './SubscriberTable';

export const Subscribers = (props) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const subscribersList = useSelector((state) => state.subscribers);
  const { loading, subscribers, totalPage } = subscribersList;

  useEffect(() => {
    dispatch(getSubscribersList(page));
  }, [dispatch, page]);

  return (
    !loading && (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '80vw',
          margin: '0 auto',
        }}
      >
        <SubscriberTable
          page={page}
          setPage={setPage}
          subscribers={subscribers.subscriberList || []}
          totalPage={totalPage || 10}
        />
      </Box>
    )
  );
};

export default Subscribers;
