import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribersList } from '../../reduxConfig/action/subscriberAction';

export const Subscribers = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribersList());
  }, [dispatch]);

  return <div>Subscribers</div>;
};

export default Subscribers;
