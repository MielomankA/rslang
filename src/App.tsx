import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import { LoginPage } from './pages/login/LoginPage';
import { HomePage } from './pages/home/HomePage';
import { AuthPage } from './pages/auth/AuthPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// # ?retryWrites=true&w=majority
