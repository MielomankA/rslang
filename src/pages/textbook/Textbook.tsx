import axios from 'axios';

import { useEffect, useState } from 'react';

import { Pagination } from '@mui/material';
import HearingIcon from '@mui/icons-material/Hearing';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { IWord } from '../../shared/ts/models';

import './Textbook.scss';
import { GameCard } from './GameCard';
import { TextbookGroupsButtons } from './TextbookGroupsButtons';
import { WordCard } from './WordCard';
import { useNavigate } from 'react-router-dom';

export const Textbook = () => {
  const [wordsData, setWordsData] = useState<Array<IWord>>([]);
  const [group, setGroup] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const navigate = useNavigate();

  const urlWords = `${process.env.REACT_APP_BASE_URL}words?group=${group}&page=${page}`;

  useEffect(() => {
    axios
      .request({
        url: urlWords,
        method: 'GET',
      })
      .then((response) => {
        setWordsData(response.data);
      });
  }, [urlWords]);

  return (
    <>
      <Header />
      <section className="textbook-page">
        <div className="textbook-page__games">
          <div onClick={() => navigate('/games/audiocall', { replace: true })}>
            <GameCard text="Аудиовызов">
              <HearingIcon />
            </GameCard>
          </div>
          <div onClick={() => navigate('/games/sprint', { replace: true })}>
            <GameCard text="Спринт">
              <DirectionsRunIcon />
            </GameCard>
          </div>
        </div>
        <TextbookGroupsButtons setGroup={setGroup} />
        <Pagination
          className="textbook-page__pagination"
          count={30}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={(_, page) => setPage(page - 1)}
        />
        <div className="textbook-page__words">
          {wordsData.map((word, index) => {
            return <WordCard key={`word-card-${index}`} wordInfo={word} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
