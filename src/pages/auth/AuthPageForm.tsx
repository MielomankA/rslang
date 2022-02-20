import { useState } from 'react';
import { Button, TextField } from '@mui/material';

import { IPostRequestUserData } from '../../shared/ts/models';
import { useAppDispatch } from '../../store/hooks/redux';
import { userAuth } from '../../shared/ts/helperFunctions';
import { useNavigate } from 'react-router-dom';

export const AuthPageForm = () => {
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authData: IPostRequestUserData = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };

  // const signinData = {
  //   email: inputEmail,
  //   password: inputPassword,
  // };

  const handleSubmit = () => {
    if (inputName.length < 3) {
      alert('Имя должно содержать 3 и более символа');
    }

    if (inputEmail.length === 0 || inputPassword.length === 0) {
      alert('Поле не должно быть пустым');
    }

    userAuth({ endpointUrl: 'users', data: authData }, dispatch, navigate);
    // userAuth(
    //   {
    //     endpointUrl: 'signin',
    //     data: signinData,
    //   },
    //   dispatch,
    //   navigate
    // );
  };

  return (
    <form className="form">
      <TextField id="name" label="Имя*" variant="outlined" type="text" onChange={(e) => setInputName(e.target.value)} />
      <TextField
        id="email"
        label="Email*"
        variant="outlined"
        type="email"
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Пароль*"
        variant="outlined"
        type="password"
        autoComplete={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Зарегестрироваться
      </Button>
    </form>
  );
};
