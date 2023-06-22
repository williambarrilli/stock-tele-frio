import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <>
      <ToastContainer />
      {/* <Login /> */}
      <Home />
    </>
  </React.StrictMode>,
);
