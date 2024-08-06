import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDevices, deleteDevice} from '../store/slices/deviceSlice';
import {RootState} from '../store';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  IconButton
} from '@mui/material';
import SearchBar from './SearchBar';
import DeleteIcon from '@mui/icons-material/Delete';

const DeviceList: React.FC = () => {
  const dispatch = useDispatch();
  const {list: devices, status, error} = useSelector((state: RootState) => state.devices);

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  if (status === 'loading') return <CircularProgress/>;

  const handleDelete = (id: number) => {
    dispatch(deleteDevice(id));
  };

  return (
    <>
      <SearchBar/>
      {status === 'failed' && <Typography color="error">Failed to load devices: {error}</Typography>}
      {status === 'succeeded' && devices.length === 0 && <Typography>No devices found</Typography>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Unique ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Update</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.uniqueId}</TableCell>
                <TableCell>{device.status}</TableCell>
                <TableCell>{device.lastUpdate}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(device.id)} color="secondary">
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DeviceList;
