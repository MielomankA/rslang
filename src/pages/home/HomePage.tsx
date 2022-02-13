import { Header } from '../../components/header/Header';
import { HomeIntro } from './HomeIntro';
import { HomeAdvantages } from './HomeAdvantages';
import { HomeDevelopers } from './HomeDevelopers';
import { Footer } from '../../components/footer/Footer';

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
