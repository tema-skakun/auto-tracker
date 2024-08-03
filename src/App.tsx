import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import MyAppBar from './components/AppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import DeviceList from './components/DeviceList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><MyAppBar /><Home /></>} />
          <Route path="/devices" element={<><MyAppBar /><DeviceList /></>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
