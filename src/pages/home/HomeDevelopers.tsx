import GitHubIcon from '@mui/icons-material/GitHub';
import { grey } from '@mui/material/colors';

import './HomeDevelopers.scss';
import logoMielo from '../../assets/image/logo-mielo.png';

export const HomeDevelopers = () => {
  return (
    <section className="home__developers">
      <h2 className="home__developers_title">Наша команда</h2>
      <div className="home__developers_content">
        <div className="developers__card">
          <img src={logoMielo} alt="" className="developer__card_image" />
          <div className="developer__card_description">
            <div className="developer__card_name">
              <h3>Mielomanka</h3>
              <a href="https://github.com/MielomankA" target="_blank" rel="noreferrer noopener">
                <GitHubIcon sx={{ color: grey[900] }} />
              </a>
            </div>
            <p className="developer__card_job">Frontend-developer</p>
            <p className="developer__card_work"> Что сделали ?</p>
            <div className="developer__card_characteristic">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </div>
          </div>
        </div>

        <div className="developers__card">
          <img src={logoMielo} alt="" className="developer__card_image" />
          <div className="developer__card_description">
            <div className="developer__card_name">
              <h3>Mielomanka</h3>
              <a href="https://github.com/MielomankA" target="_blank" rel="noreferrer noopener">
                <GitHubIcon sx={{ color: grey[900] }} />
              </a>
            </div>
            <p className="developer__card_job">Frontend-developer</p>
            <p className="developer__card_work"> Что сделали ?</p>
            <div className="developer__card_characteristic">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
