import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import { LoginPage } from './pages/login/LoginPage';
import { HomePage } from './pages/home/HomePage';
import { AuthPage } from './pages/auth/AuthPage';
import { useAppDispatch } from './store/hooks/redux';
import { addUsername } from './store/reducers/userSlice';
import { Textbook } from './pages/textbook/Textbook';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const username = localStorage.getItem('username');

    if (username) {
      dispatch(addUsername(username));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/textbook" element={<Textbook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
