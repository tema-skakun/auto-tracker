import React, {useState} from 'react';
import {TextField, Button, Grid, Paper} from '@mui/material';
import {useDispatch} from 'react-redux';
import {fetchDevices, fetchDevicesById} from '../store/slices/deviceSlice';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (search.trim() === '') {
      dispatch(fetchDevices());
    } else {
      const ids = search.split(',').map(id => parseInt(id.trim(), 10));
      dispatch(fetchDevicesById(ids));
    }
  };

  return (
    <Paper style={{padding: 16, margin: '15px 0'}}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8} sm={9}>
          <TextField
            label="Search by ID"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <Button
            onClick={handleSearch}
            variant="contained"
            color="primary"
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchBar;
