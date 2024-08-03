import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import DeviceList from '../DeviceList';

export default {
  title: 'DeviceList',
  component: DeviceList,
};

export const Default = () => (
  <Provider store={store}>
    <DeviceList />
  </Provider>
);
