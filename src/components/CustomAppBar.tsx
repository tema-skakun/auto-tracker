import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import LogoutButton from './LogoutButton.tsx';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{flexGrow: 1}}>
          СтавТрэк
        </Typography>
        <Button color="inherit" onClick={() => navigate('/devices')}>Devices</Button>
        <LogoutButton/>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
