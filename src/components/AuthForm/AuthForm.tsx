import { SyntheticEvent, memo } from 'react';
import { Button, Typography } from '@mui/material';

import AuthInput from '../AuthInput/AuthInput';
import { authSendRequest } from '../../redux/actions/auth';
import { UserCredentials } from '../../types/userInterfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { submitButton, authWrapper, helperText } from './styles';

const AuthForm = memo(() => {
  const dispatch = useAppDispatch();
  
  const modalType = useAppSelector((store) => store.modal.modalType);
  const error = useAppSelector((store) => store.auth.error);
  const isModalRegister = modalType === 'register' ? true : false;

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson: UserCredentials = Object.fromEntries(formData);
    dispatch(authSendRequest(formJson));
  };

  return (
    <form
      className='box__auth-form form' 
      onSubmit={handleSubmit} style={authWrapper}
    >
      <AuthInput inputType={'login'} />
      {isModalRegister && ( <AuthInput inputType={'email'} /> )}
      <AuthInput inputType={'password'} />
      {error &&
        <Typography
          className='form__error-text'
          sx={helperText}>
          {error}
        </Typography>
      }
      <Button 
        className='form__button-submit'
        color='primary'
        sx={submitButton}
        type='submit'
      >
        Submit
      </Button>
    </form>
  );
});


export default AuthForm;
