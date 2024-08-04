import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../store/slices/authSlice';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <Button color="inherit" onClick={handleLogout}>Logout</Button>
  );
};

export default LogoutButton;
