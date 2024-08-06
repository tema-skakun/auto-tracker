import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addDevice} from '../store/slices/deviceSlice';
import {TextField, Button, Paper, Grid} from '@mui/material';

const AddDeviceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    uniqueId: '',
    status: '',
    disabled: false,
    lastUpdate: '',
    positionId: 0,
    groupId: 0,
    phone: '',
    model: '',
    contact: '',
    category: '',
    attributes: {}
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addDevice(formData));
    setFormData({
      id: 0,
      name: '',
      uniqueId: '',
      status: '',
      disabled: false,
      lastUpdate: '',
      positionId: 0,
      groupId: 0,
      phone: '',
      model: '',
      contact: '',
      category: '',
      attributes: {}
    });
  };

  return (
    <Paper style={{padding: 16, margin: '15px 0'}}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Add TextField components for each form input */}
          {Object.keys(formData).map(key => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key}
                fullWidth
                variant="outlined"
                name={key}
                value={formData[key as keyof typeof formData] as string | number}
                onChange={handleChange}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Add Device</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddDeviceForm;
