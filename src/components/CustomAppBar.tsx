import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import LogoutButton from './LogoutButton';
import AddDeviceModal from './AddDeviceModal';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            СтавТрэк
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/devices')}>Devices</Button>
          <Button color="inherit" onClick={handleOpen}>Add Device</Button>
          <LogoutButton/>
        </Toolbar>
      </AppBar>
      <AddDeviceModal open={open} handleClose={handleClose}/>
    </>
  );
};

export default CustomAppBar;
