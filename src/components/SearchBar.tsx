import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchDevicesById } from '../store/slices/deviceSlice';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    const ids = search.split(',').map(id => parseInt(id.trim()));
    dispatch(fetchDevicesById(ids));
  };

  return (
    <div>
      <TextField
        label="Search by ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">Search</Button>
    </div>
  );
};

export default SearchBar;
