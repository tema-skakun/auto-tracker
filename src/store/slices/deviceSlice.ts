import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import client from '../../api/client';

interface Device {
  id: number;
  name: string;
  uniqueId: string;
  status: string;
  lastUpdate: string;
  positionId: number;
  groupId: number;
  phone: string;
  model: string;
  contact: string;
  category: string;
  attributes: Record<string, unknown>;
}

interface DevicesState {
  list: Device[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DevicesState = {
  list: [],
  status: 'idle',
  error: null,
};

export const fetchDevices = createAsyncThunk('devices/fetchDevices', async () => {
  try {
    const response = await client.get('/devices');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch devices');
  }
});

export const fetchDevicesById = createAsyncThunk('devices/fetchDevicesById', async (ids: number[]) => {
  try {
    if (ids.length === 0) {
      return [];
    }
    const response = await client.get(`/devices?id=${ids.join('&id=')}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch devices by ID');
  }
});

export const addDevice = createAsyncThunk('devices/addDevice', async (newDevice: Device) => {
  try {
    const response = await client.post('/devices', newDevice);
    return response.data;
  } catch (error) {
    throw Error('Failed to add device');
  }
});

export const deleteDevice = createAsyncThunk('devices/deleteDevice', async (deviceId: number) => {
  try {
    await client.delete(`/devices/${deviceId}`);
    return deviceId;
  } catch (error) {
    throw Error('Failed to delete device');
  }
});

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch devices';
      })
      .addCase(fetchDevicesById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDevicesById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchDevicesById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch devices by ID';
      })
      .addCase(addDevice.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteDevice.fulfilled, (state, action) => {
        state.list = state.list.filter(device => device.id !== action.payload);
      });
  },
});

export default deviceSlice.reducer;
