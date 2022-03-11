import axios from 'axios';

import { Dispatch } from '@reduxjs/toolkit';

import { addUsername } from '../../store/reducers/userSlice';
import { IWord, RequestConfig } from './models';
import { NavigateFunction } from 'react-router-dom';

export const userAuth = (requestConfig: RequestConfig, dispatch: Dispatch, navigate: NavigateFunction) => {
  axios
    .request({
      url: `${process.env.REACT_APP_BASE_URL}${requestConfig.endpointUrl}`,
      method: 'POST',
      data: requestConfig.data,
    })
    .then((response) => {
      localStorage.setItem('authId', response.data.id);
      localStorage.setItem('username', response.data.name);
      dispatch(addUsername(response.data.name));

      if (response.data.name) {
        navigate('/home', { replace: true });
      }
    })
    .catch((error) => {
      alert(error.response.data);
      console.log(error.response);
    });
};

export const getWords = async (
  setWordsData: (WordsData: Array<IWord>) => void,
  group: number = 0,
  page: number = 0
) => {
  const response = await axios.request({
    url: `${process.env.REACT_APP_BASE_URL}words`,
    method: 'GET',
    params: {
      group,
      page,
    },
  });

  const wordsData: Array<IWord> = response.data;

  setWordsData(wordsData);
};
