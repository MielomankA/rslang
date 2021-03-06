import { MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="header__burger-menu_icon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            navigate('/home', { replace: true });
            handleClose();
          }}
        >
          Главная
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/textbook', { replace: true });
            handleClose();
          }}
        >
          Учебник
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/games', { replace: true });
            handleClose();
          }}
        >
          Игры
        </MenuItem>
        <MenuItem onClick={handleClose}>Статистика</MenuItem>
      </Menu>
    </div>
  );
};
