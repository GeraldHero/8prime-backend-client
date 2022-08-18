import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import BackspaceIcon from '@mui/icons-material/Backspace';

const ChildModal = ({ open, setChildOpen, style, msg }) => {
  const handleClose = () => {
    setChildOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 500 }}>
          <h2 id='child-modal-title'>Message:</h2>
          <p id='child-modal-description'>{msg}</p>
          <Button
            size='medium'
            style={{ color: '#424242' }}
            startIcon={<BackspaceIcon />}
            onClick={handleClose}
          >
            Back
          </Button>
          <Button
            color='success'
            size='small'
            variant='contained'
            onClick={handleClose}
            endIcon={<SendIcon />}
          >
            Reply
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ChildModal;
