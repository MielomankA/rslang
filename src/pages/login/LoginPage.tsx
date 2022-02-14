import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField } from '@mui/material';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { userAuth } from '../../shared/ts/helperFunctions';
import { useAppDispatch } from '../../store/hooks/redux';

import './LoginPage.scss';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

  const signinData = {
    email: inputEmail,
    password: inputPassword,
  };

  const handleSubmit = () => {
    userAuth(
      {
        endpointUrl: 'signin',
        data: signinData,
      },
      dispatch
    );

    navigate('/home', { replace: true });
  };

  return (
    <>
      <Header />
      <section className="login-page">
        <div className="login-page__content">
          <h1 className="login-page__title">Войти</h1>
          <form className="form">
            <TextField
              id="login-email"
              label="Email*"
              variant="outlined"
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <TextField
              id="login-password"
              label="Пароль*"
              variant="outlined"
              type="password"
              autoComplete={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Подтвердить
            </Button>
          </form>
          <div className="login-page__auth_link">
            <span>Еще не с нами? Тогда </span>
            <button
              className="login-page__auth_link-btn"
              type="button"
              onClick={() => navigate('/auth', { replace: true })}
            >
              зарегистрируйся
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
