import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { IRequestUserData } from '../../shared/ts/models';
import './AuthPage.scss';

export const AuthPage = () => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

  const authData = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };

  useEffect(() => {
    // setInputName(inputName);
    // setInputEmail(inputEmail);
    // setInputPassword(inputPassword);
  });

  const handleSubmit = () => {
    console.log(authData);

    axios.request({
      url: `${process.env.REACT_APP_BASE_URL}users`,
      method: 'POST',
      data: authData,
    });
    // axios
    //   .post(`${process.env.REACT_APP_BASE_URL}users`, { authData })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <Header />
      <section className="auth-page">
        <div className="auth-page__content">
          <h1 className="auth-page__title">Регистрация</h1>
          <TextField
            id="outlined-basic"
            label="Имя*"
            variant="outlined"
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email*"
            variant="outlined"
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Пароль*"
            variant="outlined"
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Зарегестрироваться
          </Button>
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
