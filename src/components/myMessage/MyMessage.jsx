import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

const MyMessage = ({ variant, children }) => {
  const [show, setShow] = useState(true);
  if (show)
    return (
      <Alert severity={variant} onClose={() => setShow(false)}>
        {children}
      </Alert>
    );
  return null;
};

MyMessage.defaultProps = {
  variant: 'error',
};

MyMessage.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default MyMessage;
