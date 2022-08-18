import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { deleteSubscriber } from '../../../../reduxConfig/action/subscriberAction';

export default function AlertDialog({ query, setQuery }) {
  const dispatch = useDispatch();

  const { openDialog, deleteItems } = query;
  const { name, email, phone, id } = deleteItems;

  const closeHandler = () => {
    return setQuery({ ...query, openDialog: false, deleteItems: '' });
  };

  const agreeHandler = () => {
    dispatch(deleteSubscriber(id));
    return setQuery({
      page: 0,
      limit: 10,
      openDialog: false,
      deleteItems: '',
      snackbarOpen: true,
    });
  };
  return (
    <div>
      <Dialog
        open={openDialog && openDialog}
        onClose={closeHandler}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete this item?'}
        </DialogTitle>
        <DialogContent>
          <Typography p={2}>{` ${name} | ${email} | ${phone}`}</Typography>
          <Divider />
          <DialogContentText id='alert-dialog-description'>
            The item you selected will be permanently deleted from our database
            and cannot be recovered. Click agree to delete, or disagree to go
            back.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler}>Disagree</Button>
          <Button onClick={agreeHandler} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
