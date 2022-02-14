import axios from 'axios';

import { Dispatch } from '@reduxjs/toolkit';

import { addUsername } from '../../store/reducers/userSlice';
import { RequestConfig } from './models';

export const userAuth = (requestConfig: RequestConfig, dispatch: Dispatch) => {
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
    })
    .catch((error) => {
      alert(error.response.data);
      console.log(error.response);
    });
};
