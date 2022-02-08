import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

import './LoginPage.scss';

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="login-page">
        <div className="login-page__content">
          <h1 className="login-page__title">Войти</h1>
          <TextField id="outlined-basic" label="Email*" variant="outlined" />
          <TextField id="outlined-basic" label="Пароль*" variant="outlined" />
          <Button variant="contained">Подтвердить</Button>
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
