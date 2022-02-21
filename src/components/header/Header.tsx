import { useNavigate } from 'react-router-dom';

import { Button, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import './Header.scss';
import { BurgerMenu } from './BurgerMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { addUsername } from '../../store/reducers/userSlice';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const nickname = useAppSelector((state) => state.userReducer.user.name);

  const handleClickLogout = () => {
    localStorage.clear();
    dispatch(addUsername(''));
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo" onClick={() => navigate('/home', { replace: true })}>
          RS-Lang
        </div>
        <div className="header__nav_wrap">
          <nav className="header__nav">
            <ul className="header__nav_list">
              <li className="header__nav_item" onClick={() => navigate('/home', { replace: true })}>
                Главная
              </li>
              <li className="header__nav_item" onClick={() => navigate('/textbook', { replace: true })}>
                Учебник
              </li>
              <li className="header__nav_item" onClick={() => navigate('/games', { replace: true })}>
                Игры
              </li>
              <li className="header__nav_item">Статистика</li>
            </ul>
          </nav>
          <div className="header__burger_none">
            <BurgerMenu />
          </div>
          {nickname ? null : (
            <Button
              className="header__login_button"
              variant="outlined"
              sx={{
                bgcolor: '#fff',
                color: '#1976d2',
                boxShadow: 1,
                borderRadius: 3,
                p: 1,
                minWidth: 100,
              }}
              onClick={() => navigate('/login', { replace: true })}
            >
              <LoginIcon className="header__login_icon" />
              Вход
            </Button>
          )}
          {nickname ? (
            <div className="header__auth">
              <p>{nickname ? nickname : null}</p>
              <IconButton color="primary" aria-label="add an alarm" onClick={handleClickLogout}>
                <LogoutIcon className="header__logout_icon" />
              </IconButton>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
