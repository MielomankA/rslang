import { useNavigate } from 'react-router-dom';

import { Button, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Header.scss';
import { BurgerMenu } from './BurgerMenu';
import { IHeaderProps } from '../../shared/ts/models';
import { useEffect, useState } from 'react';

export const Header: React.FC<IHeaderProps> = ({ username }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>(username);

  console.log(username);

  useEffect(() => {
    const localStorageUsername = localStorage.getItem('username');

    if (localStorageUsername) {
      setNickname(localStorageUsername);
    }

    if (!localStorageUsername) {
      setNickname('');
    }
  }, []);

  // setUserName(value);

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
              <li className="header__nav_item">Учебник</li>
              <li className="header__nav_item">Игры</li>
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
              <IconButton color="primary" aria-label="add an alarm" onClick={() => localStorage.clear()}>
                <LogoutIcon className="header__logout_icon" />
              </IconButton>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
