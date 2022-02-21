import HearingIcon from '@mui/icons-material/Hearing';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { blue } from '@mui/material/colors';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { AdvantageCard } from '../home/AdvantageCard';
import './GamesPage.scss';
import { useNavigate } from 'react-router-dom';

export const GamesPage = () => {
  const colorBlue = blue[600];
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="games-page">
        <div className="games-page__card" onClick={() => navigate('/games/audiocall', { replace: true })}>
          <AdvantageCard
            title="Аудиовызов"
            description="Проверьте свои навыки аудирования, пытаясь подобрать правильное значение после услышанного слова."
          >
            <HearingIcon
              sx={{
                fontSize: 40,
                color: colorBlue,
              }}
            />
          </AdvantageCard>
        </div>
        <div className="games-page__card" onClick={() => navigate('/games/sprint', { replace: true })}>
          <AdvantageCard
            title="Спринт"
            description="Попробуйте набрать максимальное количество баллов за минуту. Проверьте свои знания."
          >
            <DirectionsRunIcon
              sx={{
                fontSize: 40,
                color: colorBlue,
              }}
            />
          </AdvantageCard>
        </div>
      </section>
      <Footer />
    </>
  );
};
