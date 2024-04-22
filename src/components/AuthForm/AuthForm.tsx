import { SyntheticEvent} from 'react';
import { TextField, Button, Typography } from '@mui/material';

import { authRequest } from '../../redux/actions/auth';
import { nullifyModal } from '../../redux/actions/modal';
import { FrontEndUserData } from '../../types/user-interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { 
  loginStyles, 
  emailStyles, 
  passwordStyles, 
  submitButton, 
  authWrapper, 
  helperText } from './styles';

const AuthForm = () => {
  const dispatch = useAppDispatch();
  
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson: FrontEndUserData = Object.fromEntries(formData);
    dispatch(authRequest(formJson));
    if (!error) dispatch(nullifyModal());
  };

  const modalType = useAppSelector((store) => store.modal.modalType);
  const error = useAppSelector((store) => store.auth.error);

  return (
    <form
      className='box__auth-form form' 
      onSubmit={handleSubmit} style={authWrapper}
    >
      <TextField
        required
        name='login'
        label='Login' 
        sx={loginStyles}
        variant='standard' 
        className='form__login-field' 
      />
      {modalType === 'register' && (
        <TextField
          required
          name='email'
          type='email'
          label='Email' 
          sx={emailStyles}
          variant='standard' 
          className='form__email-field' 
        />
      )}
      <TextField 
        required
        name='password'
        type='password'
        label='Password' 
        variant='standard'
        className='form__password-field' 
        sx={passwordStyles}
      />
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
};

export default AuthForm;
