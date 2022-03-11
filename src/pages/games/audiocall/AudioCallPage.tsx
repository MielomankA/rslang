import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { deepPurple, indigo, blue, lightBlue, cyan, teal, green } from '@mui/material/colors';

import { Footer } from '../../../components/footer/Footer';
import { Header } from '../../../components/header/Header';
import { getWords } from '../../../shared/ts/helperFunctions';
import { IAnswer } from '../../../shared/ts/models';

import './AudioCallPage.scss';
import { getAnswersArray } from './AudioCallGame';

// export interface IAnswer {
//   word: string;
//   isCorrect: boolean;
// }

export const AudioCallPage = () => {
  const colorDeepPurple = deepPurple[300];
  const colorIndigo = indigo[300];
  const colorBlue = blue[300];
  const colorLightBlue = lightBlue[300];
  const colorCyan = cyan[300];
  const colorTeal = teal[300];
  const colorGreen = green[300];
  const navigate = useNavigate();

  const [game, setGame] = useState<boolean>(false);
  const [arrayAnswers, setArrayAnswers] = useState<Array<IAnswer>>([]);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  const onGame = () => {
    setGame(true);
  };

  useEffect(() => {
    getWords((arrayWords) => {
      const answers = getAnswersArray(arrayWords, 5);
      const correctAudio = answers.find((value) => value.isCorrect);
      const audioWordUrl = `${process.env.REACT_APP_BASE_URL}${correctAudio?.audio}`;
      const audioWord = new Audio(audioWordUrl);

      setArrayAnswers(answers);
      setAudio(audioWord);

      audioWord.oncanplaythrough = () => {
        audioWord.play();
      };
      audioWord.load();

      return () => {
        if (audioWord) {
          audioWord.pause();
          audioWord.oncanplaythrough = null;
        }
      };
    });
  }, []);

  const onStart = () => {
    if (!audio) {
      return;
    }

    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      <Header />
      {/* {!game && (
        <div className="audiocall-page">
          <div className="audiocall-page__block_one">
            <h1 className="audiocall-page__title">Аудиовызов</h1>
            <p className="audiocall-page__description">
              Тренировка Аудиовызов улучшает твое восприятие речи на слух. Выбирай подходящий вариант из предложенных.
            </p>
          </div>
          <div className="audiocall-page__block_two">
            <h3 className="audiocall-page__title_small">Выбери уровень:</h3>
            <div className="audiocall-page__level-buttons">
              <Button
                onClick={onGame}
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
                onClick={onGame}
                variant="contained"
                sx={{
                  bgcolor: colorIndigo,
                  minWidth: 100,
                }}
              >
                A2
              </Button>
              <Button
                onClick={onGame}
                variant="contained"
                sx={{
                  bgcolor: colorBlue,
                  minWidth: 100,
                }}
              >
                B1
              </Button>
              <Button
                onClick={onGame}
                variant="contained"
                sx={{
                  bgcolor: colorLightBlue,
                  minWidth: 100,
                }}
              >
                B2
              </Button>
              <Button
                onClick={onGame}
                variant="contained"
                sx={{
                  bgcolor: colorCyan,
                  minWidth: 100,
                }}
              >
                C1
              </Button>
              <Button
                onClick={onGame}
                variant="contained"
                sx={{
                  bgcolor: colorTeal,
                  minWidth: 100,
                }}
              >
                C2
              </Button>
            </div>
            <div className="audiocall-page__nav-buttons">
              <Button onClick={onGame} variant="contained">
                Начать
              </Button>
              <Button variant="contained" onClick={() => navigate('/games', { replace: true })}>
                Назад к играм
              </Button>
            </div>
          </div>
        </div>
      )} */}
      {/* {game && ( */}
      <div className="audiocall">
        <div className="audiocall__wrapper">
          <Button
            variant="contained"
            sx={{
              bgcolor: colorCyan,
              minWidth: 100,
              padding: 0,
              borderRadius: '50%',
              width: 100,
              height: 100,
            }}
            onClick={onStart}
          >
            <VolumeUpIcon sx={{ fontSize: 50 }} />
          </Button>
          <div className="audiocall__words">
            {arrayAnswers.map((answer, index) => {
              return (
                <Button
                  key={`answer-${index}`}
                  variant="contained"
                  sx={{
                    bgcolor: 'transparent',
                    color: 'black',
                    minWidth: 100,
                  }}
                >
                  {`${index + 1} ${answer.word}`}
                </Button>
              );
            })}
          </div>
          <Button variant="contained">Не знаю</Button>
        </div>
      </div>
      {/* )} */}
      <Footer />
    </>
  );
};
