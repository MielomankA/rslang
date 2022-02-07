import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { HomeAdvantages } from './HomeAdvantages';
import { HomeDevelopers } from './HomeDevelopers';
import { HomeIntro } from './HomeIntro';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeIntro />
      <HomeAdvantages />
      <HomeDevelopers />
      <Footer />
    </>
  );
};
