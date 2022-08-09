import React from 'react';
import { Box, Typography } from '@mui/material';
import videoFile from '../assets/video/file.mp4';

const style = {
  mainDiv: {
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    height: '80vh',
  },
  video: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    objectFit: 'cover',
    filter: 'blur(1px)',
  },
  childDiv: {
    position: 'absolute',
    backgroundColor: 'transparent',
    height: '100%',
    left: 0,
    right: 0,
    top: { xs: '30%', md: 80 },
    opacity: 1,
    margin: 'auto',
    width: { xs: '80%', md: '50%' },
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: { xs: 14, sm: 16, md: 25 },
    color: '#ffffff',
    padding: { xs: 4, md: 6 },
    backgroundColor: {
      xs: 'rgba(0, 0, 0, 0.5)',
      md: 'rgba(6, 56, 82, 0.5)',
    },
  },
};
function MyHomePage() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box components='div' sx={style.mainDiv}>
        <video style={style.video} className='videoTag' autoPlay loop muted>
          <source src={videoFile} type='video/mp4' />
        </video>

        <Box component='span' sx={style.childDiv}>
          <Typography sx={style.text}>
            The 8 prime admin dashboard is an admin only dashboard that allows
            you to control data to be shown on the front end. You will be able
            to manage the data based on frontend information, so that it can be
            displayed accordingly. The dashboard also has add/edit feature so
            that you can edit existing data and add new ones.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MyHomePage;
