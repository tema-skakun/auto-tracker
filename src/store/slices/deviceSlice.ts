import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../api/client';

interface Device {
  id: number;
  name: string;
  uniqueId: string;
  status: string;
  lastUpdate: string;
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
      });
  },
});

export default deviceSlice.reducer;
