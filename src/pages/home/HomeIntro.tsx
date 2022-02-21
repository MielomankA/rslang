import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import homeIntro from '../../assets/svg/home-intro.svg';

import './HomeIntro.scss';

export const HomeIntro = () => {
  const navigate = useNavigate();

  return (
    <section className="home__intro">
      <div className="home__intro_content">
        <h1 className="home__intro_title">RS Lang</h1>
        <span className="home__intro_span">Изучение английского еще никогда не было таким простым</span>
        <p className="home__intro_description">
          Запоминание английских слов может очень быть увлекательным! Играйте в игры, слушайте произношение, улучшайте
          свои знание. С нашим приложением обучение в радость!
        </p>
        <Button variant="contained" onClick={() => navigate('/textbook', { replace: true })}>
          Начать изучение!
        </Button>
      </div>
      <img src={homeIntro} alt="" className="home__intro_img" />
    </section>
  );
};
