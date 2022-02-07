import './HomeDevelopers.scss';
import logoMielo from '../../assets/image/logo-mielo.png';
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
          jobStatus="Frontend-developer"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
        <DeveloperCard
          avatarUrl={logoMielo}
          name="Mielomanka"
          githubUrl="https://github.com/MielomankA"
          jobStatus="Frontend-developer"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
      </div>
    </section>
  );
};
