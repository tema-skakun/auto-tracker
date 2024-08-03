import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../api/client';

export const fetchDevices = createAsyncThunk('devices/fetchDevices', async () => {
  const response = await client.get('/devices');
  return response.data;
});

export const fetchDevicesById = createAsyncThunk('devices/fetchDevicesById', async (ids: number[]) => {
  const response = await client.get(`/devices?id=${ids.join('&id=')}`);
  return response.data;
});

const deviceSlice = createSlice({
  name: 'devices',
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDevices.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchDevicesById.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default deviceSlice.reducer;
export { deviceSlice };
