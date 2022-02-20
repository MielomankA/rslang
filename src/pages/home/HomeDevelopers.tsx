import logoMielo from '../../assets/image/logo-mielo.png';
import photoHotlovestl from '../../assets/image/photo-hotlovestl.jpg';

import './HomeDevelopers.scss';
import { DeveloperCard } from './DeveloperCard';

export const HomeDevelopers = () => {
  return (
    <section className="home__developers">
      <h2 className="home__developers_title">Наша команда</h2>
      <div className="home__developers_content">
        <DeveloperCard
          avatarUrl={logoMielo}
          name="Mielomanka"
          githubUrl="https://github.com/MielomankA"
          jobStatus="Team leader, Frontend-developer"
          description="Главная страница, авторизация, учебник"
        />
        <DeveloperCard
          avatarUrl={photoHotlovestl}
          name="Hotlovestl"
          githubUrl="https://github.com/hotlovestl"
          jobStatus="Frontend-developer"
          description="Аудиовызов, статья, подготовка презентации"
        />
      </div>
    </section>
  );
};
