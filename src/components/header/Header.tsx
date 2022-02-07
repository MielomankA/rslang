import { Button, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Header.scss';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">RS-Lang</div>
        <div className="header__nav_wrap">
          <nav className="header__nav">
            <ul className="header__nav_list">
              <li className="header__nav_item">Главная</li>
              <li className="header__nav_item">Учебник</li>
              <li className="header__nav_item">Игры</li>
              <li className="header__nav_item">Статистика</li>
            </ul>
          </nav>
          <div className="header__burger_none">
            <BurgerMenu />
          </div>
          <Button
            className="header__login_button"
            variant="outlined"
            sx={{
              bgcolor: '#fff',
              color: '#1d18d9',
              boxShadow: 1,
              borderRadius: 3,
              p: 1,
              minWidth: 100,
            }}
          >
            <LoginIcon className="header__login_icon" />
            Вход
          </Button>
          <AccountCircleIcon sx={{ fontSize: 40 }} />
          <IconButton color="primary" aria-label="add an alarm">
            <LogoutIcon className="header__logout_icon" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
