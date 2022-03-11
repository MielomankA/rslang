import { useEffect, useState } from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue, green, red } from '@mui/material/colors';

import { IWordCardProps } from '../../shared/ts/models';

import './WordCard.scss';

export const WordCard: React.FC<IWordCardProps> = ({
  wordInfo: {
    id,
    word,
    image,
    audio,
    audioMeaning,
    audioExample,
    textMeaning,
    textExample,
    transcription,
    wordTranslate,
    textMeaningTranslate,
    textExampleTranslate,
  },
}) => {
  const colorBlue = blue[500];
  const colorRed = red[500];
  const colorGreen = green[500];
  const [play, setPlay] = useState<boolean>(false);
  const [complexWords, setComplexWords] = useState<boolean>(false);
  const [learnedWord, setLearnedWord] = useState<boolean>(false);

  const audioWordUrl = `${process.env.REACT_APP_BASE_URL}${audio}`;
  const audioExampleWordUrl = `${process.env.REACT_APP_BASE_URL}${audioExample}`;
  const audioMeaningWordUrl = `${process.env.REACT_APP_BASE_URL}${audioMeaning}`;
  const username = localStorage.getItem('username');

  useEffect(() => {
    const audioWord = new Audio(audioWordUrl);
    const audioExampleWord = new Audio(audioExampleWordUrl);
    const audioMeaningWord = new Audio(audioMeaningWordUrl);

    const onPlay = (audio: HTMLAudioElement) => {
      audio.play();
    };

    if (play) {
      audioWord.addEventListener('canplaythrough', () => onPlay(audioWord));
      audioWord.addEventListener('ended', () => onPlay(audioExampleWord));
      audioExampleWord.addEventListener('ended', () => {
        onPlay(audioMeaningWord);
        setPlay(false);
      });
    }

    if (!play) {
      audioWord.pause();
      audioExampleWord.pause();
      audioMeaningWord.pause();
    }

    return () => {
      if (audioWord) {
        audioWord.pause();
        audioWord.removeEventListener('canplaythrough', () => onPlay(audioWord));
      }
      if (audioExampleWord) {
        audioExampleWord.pause();
        audioExampleWord.removeEventListener('canplaythrough', () => onPlay(audioExampleWord));
      }
      if (audioMeaningWord) {
        audioMeaningWord.pause();
        audioMeaningWord.removeEventListener('canplaythrough', () => onPlay(audioMeaningWord));
      }
    };
  }, [play, audioWordUrl, audioExampleWordUrl, audioMeaningWordUrl]);

  const onStart = () => {
    setPlay(true);
  };

  const onStop = () => {
    setPlay(false);
  };

  const onAddComplexWord = () => {
    setComplexWords(true);
  };

  const onAddNotComplexWord = () => {
    setComplexWords(false);
  };

  const isLearned = () => {
    setLearnedWord(true);
  };

  const notLearned = () => {
    setLearnedWord(false);
  };

  return (
    <div className="textbook-page__words_card" id={id}>
      <img src={`${process.env.REACT_APP_BASE_URL}${image}`} alt={word} className="textbook-page__words_img" />
      <div className="textbook-page__words_content">
        <div className="textbook-page__words_icons">
          <div className="textbook-page__words_icons-volume">
            {!play && <VolumeUpIcon onClick={onStart} />}
            {play && <StopIcon onClick={onStop} />}
          </div>
          {username && (
            <div className="textbook-page__words_icons-wrap">
              <div className="textbook-page__words_icons-access">
                {learnedWord && (
                  <CheckIcon
                    onClick={notLearned}
                    sx={{
                      color: colorGreen,
                    }}
                  />
                )}
                {!learnedWord && (
                  <CloseIcon
                    onClick={isLearned}
                    sx={{
                      color: colorRed,
                    }}
                  />
                )}
              </div>
              <div className="textbook-page__words_icons-bookmark">
                {!complexWords ? (
                  <BookmarkBorderIcon onClick={onAddComplexWord} />
                ) : (
                  <BookmarkIcon
                    onClick={onAddNotComplexWord}
                    sx={{
                      color: colorBlue,
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className="textbook-page__word">
          <div className="textbook-page__word_content">
            <span className="textbook-page__word_english">{word}</span>
            <span className="textbook-page__word_transcription">{transcription}</span>
          </div>
          <div className="textbook-page__word_translate">{wordTranslate}</div>
        </div>
        <div className="textbook-page__words_audio">
          <audio src={audioWordUrl} />
          <audio src={audioExampleWordUrl} />
          <audio src={audioMeaningWordUrl} />
        </div>
        <div className="textbook-page__phrases">
          <div dangerouslySetInnerHTML={{ __html: `${textExample}` }} />
          <div>{textExampleTranslate}</div>

          <div dangerouslySetInnerHTML={{ __html: `${textMeaning}` }} />
          <div>{textMeaningTranslate}</div>
        </div>
      </div>
    </div>
  );
};
