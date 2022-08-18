import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import ChildModal from './ChildModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({ query, setQuery }) {
  const [childOpen, setChildOpen] = useState(false);
  const [specificMsg, setSpecificMsg] = useState('');
  const { message, modalOpen } = query;

  const handleClose = () => {
    setQuery({ ...query, modalOpen: false, message: '' });
  };

  const openChildHandler = (msg) => {
    setChildOpen(true);
    setSpecificMsg(msg);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          {message ? (
            message.map((msg, idx) => {
              console.log(typeof msg.date === 'date');
              return (
                <div key={`${idx} {msg.date}`}>
                  <ListItemButton onClick={() => openChildHandler(msg.message)}>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary={msg.date} />
                  </ListItemButton>
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}

          <ChildModal
            open={childOpen}
            setChildOpen={setChildOpen}
            style={style}
            msg={specificMsg}
          />
        </Box>
      </Modal>
    </div>
  );
}
