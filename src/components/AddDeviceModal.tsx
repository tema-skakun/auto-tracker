import React from 'react';
import {Modal, Box, Typography, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddDeviceForm from './AddDeviceForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface AddDeviceModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddDeviceModal: React.FC<AddDeviceModalProps> = ({open, handleClose}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-device-modal-title"
      aria-describedby="add-device-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon/>
        </IconButton>
        <Typography id="add-device-modal-title" variant="h6" component="h2">
          Add Device
        </Typography>
        <AddDeviceForm/>
      </Box>
    </Modal>
  );
};

export default AddDeviceModal;
