import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../store/slices/deviceSlice';
import { RootState } from '../store';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from './SearchBar';

const DeviceList: React.FC = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state: RootState) => state.devices.list);

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Unique ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Update</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DeviceList;
