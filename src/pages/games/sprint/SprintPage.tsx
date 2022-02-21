import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { deepPurple, indigo, blue, lightBlue, cyan, teal, green } from '@mui/material/colors';

import { Footer } from '../../../components/footer/Footer';
import { Header } from '../../../components/header/Header';

import './SprintPage.scss';

export const SprintPage = () => {
  const colorDeepPurple = deepPurple[300];
  const colorIndigo = indigo[300];
  const colorBlue = blue[300];
  const colorLightBlue = lightBlue[300];
  const colorCyan = cyan[300];
  const colorTeal = teal[300];
  const colorGreen = green[300];
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="sprint-page">
        <div className="sprint-page__block_one">
          <h1 className="sprint-page__title">Спринт</h1>
          <p className="sprint-page__description">
            Спринт - тренировка на скорость. Попробуй угадать как можно больше слов за отведенное время.
          </p>
        </div>
        <div className="sprint-page__block_two">
          <h3 className="sprint-page__title_small">Выбери уровень:</h3>
          <div className="sprint-page__level-buttons">
            <Button
              variant="contained"
              sx={{
                bgcolor: colorDeepPurple,
                minWidth: 100,
                '&:hover': colorGreen,
              }}
            >
              A1
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorIndigo,
                minWidth: 100,
              }}
            >
              A2
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorBlue,
                minWidth: 100,
              }}
            >
              B1
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorLightBlue,
                minWidth: 100,
              }}
            >
              B2
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorCyan,
                minWidth: 100,
              }}
            >
              C1
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorTeal,
                minWidth: 100,
              }}
            >
              C2
            </Button>
          </div>
          <div className="sprint-page__nav-buttons">
            <Button variant="contained">Начать</Button>
            <Button variant="contained" onClick={() => navigate('/games', { replace: true })}>
              Назад к играм
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
