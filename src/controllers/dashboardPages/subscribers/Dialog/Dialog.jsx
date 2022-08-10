import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, queryHandler }) {
  const closeHandler = () => {
    return queryHandler('openDialog', false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeHandler}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete this item?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            The item you selected will be permanently deleted from our database
            and cannot be recovered. Click agree to delete, or disagree to go
            back.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler}>Disagree</Button>
          <Button onClick={closeHandler} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
