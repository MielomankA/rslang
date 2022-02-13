import { useNavigate } from 'react-router-dom';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

import './AuthPage.scss';
import { AuthPageForm } from './AuthPageForm';

export const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="auth-page">
        <div className="auth-page__content">
          <h1 className="auth-page__title">Регистрация</h1>
          <AuthPageForm />
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
