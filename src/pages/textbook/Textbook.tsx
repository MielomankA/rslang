import HearingIcon from '@mui/icons-material/Hearing';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { deepPurple, indigo, blue, lightBlue, cyan, teal, green } from '@mui/material/colors';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import './Textbook.scss';
import { Button, Pagination } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export const Textbook = () => {
  const colorDeepPurple = deepPurple[300];
  const colorIndigo = indigo[300];
  const colorBlue = blue[300];
  const colorLightBlue = lightBlue[300];
  const colorCyan = cyan[300];
  const colorTeal = teal[300];
  const colorGreen = green[300];
  const [wordsData, setWordsData] = useState<Array<IWord>>([]);

  // let wordsArray;

  // const as = async () => {
  //   const response: AxiosResponse = await axios.request({
  //     url: `${process.env.REACT_APP_BASE_URL}words?group=0&page=0`,
  //     method: 'GET',
  //   });
  //   const currentData = await response.data;

  //   return currentData;
  // };

  // const wordsArray: Array<IWord> = await as();

  // const promiseGreeting = () => axios.request({ url: `${process.env.REACT_APP_BASE_URL}words`, method: 'GET' });

  // const wordsArray: Array<IWord> = promiseGreeting().then((result) => {
  //   console.log(result);
  //   return result;
  // });

  useEffect(() => {
    axios
      .request({
        url: `${process.env.REACT_APP_BASE_URL}words?group=0&page=0`,
        method: 'GET',
      })
      .then((response) => {
        setWordsData(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="textbook-page">
        <div className="textbook-page__games">
          <div className="textbook-page__games_card">
            <HearingIcon />
            {/* <img src={HearingIcon} alt="" className="styled__Image-vsvn64-1 cPjYHv" /> */}
            <div>Аудиовызов</div>
          </div>
          <div className="textbook-page__games_card">
            <DirectionsRunIcon />
            <div>Спринт</div>
          </div>
        </div>

        <div className="textbook-page__group">
          <h3 className="textbook-page__group_title">Groups</h3>
          <div className="textbook-page__group_buttons">
            <Button
              variant="contained"
              sx={{
                bgcolor: colorDeepPurple,
                borderRadius: '50%',
                minWidth: 50,
                '&:hover': colorGreen,
              }}
            >
              1
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorIndigo,
                borderRadius: '50%',
                minWidth: 50,
              }}
            >
              2
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorBlue,
                borderRadius: '50%',
                minWidth: 50,
              }}
            >
              3
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorLightBlue,
                borderRadius: '50%',
                minWidth: 50,
              }}
            >
              4
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorCyan,
                borderRadius: '50%',
                minWidth: 50,
              }}
            >
              5
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: colorTeal,
                borderRadius: '50%',
                minWidth: 50,
              }}
            >
              6
            </Button>
          </div>
        </div>

        <Pagination count={30} variant="outlined" shape="rounded" color="primary" />
        <div className="textbook-page__words">
          {wordsData.map((element, index) => {
            return (
              <div className="textbook-page__words_card" key={index}>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}${element.image}`}
                  alt={element.word}
                  className="textbook-page__words_img"
                />
                <div className="textbook-page__words_content">
                  <div className="textbook-page__words_icons">
                    <VolumeUpIcon />
                    <VolumeOffIcon />
                  </div>
                  <div className="textbook-page__word">
                    <div className="textbook-page__word_content">
                      <span className="textbook-page__word_english">{element.word}</span>
                      <span className="textbook-page__word_transcription">{element.transcription}</span>
                    </div>
                    <div className="textbook-page__word_translate">{element.wordTranslate}</div>
                  </div>
                  <div className="textbook-page__words_audio">
                    <audio src={`${process.env.REACT_APP_BASE_URL}${element.audio}`} />
                    <audio src={`${process.env.REACT_APP_BASE_URL}${element.audioExample}`} />
                    <audio src={`${process.env.REACT_APP_BASE_URL}${element.audioMeaning}`} />
                  </div>
                  <div className="textbook-page__phrases">
                    <div dangerouslySetInnerHTML={{ __html: `${element.textExample}` }} />
                    <div>{element.textExampleTranslate}</div>

                    <div dangerouslySetInnerHTML={{ __html: `${element.textMeaning}` }} />
                    <div>{element.textMeaningTranslate}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="textbook-page__words_card">
            <img src="" alt="enjoy" className="textbook-page__words_img" />
            <div className="textbook-page__words_content">
              <div className="textbook-page__word">
                <div className="textbook-page__word_content">
                  <span className="textbook-page__word_english">enjoy</span>
                  <span className="textbook-page__word_transcription">[indʒɔ́i]</span>
                </div>
                <div className="textbook-page__word_translate">наслаждаться</div>
              </div>
              <div className="textbook-page__words_audio">
                <audio src=""></audio>
                <audio src=""></audio>
                <audio src=""></audio>
              </div>
              <div className="textbook-page__phrases">
                <div>
                  To <i>enjoy</i> is to like something.
                </div>
                <div>Наслаждаться значит любить что-то</div>

                <div>
                  The woman <b>enjoys</b> riding her bicycle.
                </div>
                <div>Женщина любит кататься на велосипеде</div>
              </div>
            </div>
          </div>

          <div className="textbook-page__words_card">
            <img src="" alt="enjoy" className="textbook-page__words_img" />
            <div className="textbook-page__words_content">
              <div className="textbook-page__word">
                <div className="textbook-page__word_content">
                  <span className="textbook-page__word_english">enjoy</span>
                  <span className="textbook-page__word_transcription">[indʒɔ́i]</span>
                </div>
                <div className="textbook-page__word_translate">наслаждаться</div>
              </div>
              <div className="textbook-page__words_audio">
                <audio src=""></audio>
                <audio src=""></audio>
                <audio src=""></audio>
              </div>
              <div className="textbook-page__phrases">
                <div>
                  To <i>enjoy</i> is to like something.
                </div>
                <div>Наслаждаться значит любить что-то</div>

                <div>
                  The woman <b>enjoys</b> riding her bicycle.
                </div>
                <div>Женщина любит кататься на велосипеде</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};
