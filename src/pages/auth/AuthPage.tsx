import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { IPostRequestUserData } from '../../shared/ts/models';
import './AuthPage.scss';

export const AuthPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

  const authData: IPostRequestUserData = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };

  const handleSubmit = () => {
    axios
      .request({
        url: `${process.env.REACT_APP_BASE_URL}users`,
        method: 'POST',
        data: authData,
      })
      .then((response) => {
        localStorage.setItem('authId', response.data.id);
        localStorage.setItem('username', response.data.name);
        setUsername(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header username={username} />
      <section className="auth-page">
        <div className="auth-page__content">
          <h1 className="auth-page__title">Регистрация</h1>
          <form className="auth-page__form">
            <TextField
              id="name"
              label="Имя*"
              variant="outlined"
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <TextField
              id="email"
              label="Email*"
              variant="outlined"
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Пароль*"
              variant="outlined"
              type="password"
              value={inputPassword}
              autoComplete={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Зарегестрироваться
            </Button>
          </form>
          <div className="auth-page__auth_link">
            <span>Уже с нами? Тогда </span>
            <button
              className="auth-page__auth_link-btn"
              type="button"
              onClick={() => navigate('/login', { replace: true })}
            >
              Да, войти!
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
function data(arg0: string, data: any, authData: { name: string; email: string; password: string }) {
  throw new Error('Function not implemented.');
}
