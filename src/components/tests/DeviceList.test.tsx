import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from "../../store";
import DeviceList from '../DeviceList';

test('renders device list', async () => {
  render(
    <Provider store={store}>
      <DeviceList />
    </Provider>
  );
  const linkElement = screen.getByText(/ID/i);
  expect(linkElement).toBeInTheDocument();
});
