// src/App.tsx
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './store';
import CustomAppBar from './components/CustomAppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import Devices from './pages/Devices';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({element}) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? <>{element}</> : <Navigate to="/login"/>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<PrivateRoute element={<><CustomAppBar/><Home/></>}/>}/>
        <Route path="/devices" element={<PrivateRoute element={<><CustomAppBar/><Devices/></>}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
