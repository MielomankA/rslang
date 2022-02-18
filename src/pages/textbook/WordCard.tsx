import { useEffect, useState } from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { blue } from '@mui/material/colors';

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
  const [play, setPlay] = useState<boolean>(false);
  const [complexWords, setComplexWords] = useState<boolean>(false);

  const audioWordUrl = `${process.env.REACT_APP_BASE_URL}${audio}`;
  const audioExampleWordUrl = `${process.env.REACT_APP_BASE_URL}${audioExample}`;
  const audioMeaningWordUrl = `${process.env.REACT_APP_BASE_URL}${audioMeaning}`;

  useEffect(() => {
    const audioWord = new Audio(audioWordUrl);
    const audioExampleWord = new Audio(audioExampleWordUrl);
    const audioMeaningWord = new Audio(audioMeaningWordUrl);
    const onPlay = () => {
      audioWord.play();
      audioWord.onended = () => {
        audioExampleWord.play();
      };
      audioExampleWord.onended = () => {
        audioMeaningWord.play();
      };
    };

    if (play) {
      audioWord.addEventListener('canplaythrough', onPlay);
    } else {
      audioWord.pause();
      audioExampleWord.pause();
      audioMeaningWord.pause();
      setPlay(false);
    }

    return () => {
      if (audioWord) {
        audioWord.pause();
        audioWord.removeEventListener('canplaythrough', onPlay);
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

  return (
    <div className="textbook-page__words_card" id={id}>
      <img src={`${process.env.REACT_APP_BASE_URL}${image}`} alt={word} className="textbook-page__words_img" />
      <div className="textbook-page__words_content">
        <div className="textbook-page__words_icons">
          <div className="textbook-page__words_icons-volume">
            {!play ? <VolumeUpIcon onClick={onStart} /> : <StopIcon onClick={onStop} />}
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
