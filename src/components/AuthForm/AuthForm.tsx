import { SyntheticEvent} from 'react';
import { TextField, Button, Box } from '@mui/material';

import { nullifyModal } from '../../redux/actions/modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { loginStyles, emailStyles, passwordStyles, submitButton, authWrapper } from './styles';
import { authRequest } from '../../redux/actions/auth';

const AuthForm = () => {
  const dispatch = useAppDispatch();
  
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    dispatch(authRequest(formJson));
    dispatch(nullifyModal());
  };
  const modalType = useAppSelector((store) => store.modal.modalType);

  return (
    <Box sx={authWrapper}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          name='login'
          label='Login' 
          sx={loginStyles}
          variant='standard' 
          className='box__login-field' 
        />
        {modalType === 'register' && (
          <TextField
            required
            name='email'
            type='email'
            label='Email' 
            sx={emailStyles}
            variant='standard' 
            className='box__email-field' 
          />
        )}
        <TextField 
          required
          name='password'
          type='password'
          label='Password' 
          variant='standard'
          className='box__password-field' 
          sx={passwordStyles}
        />
        <Button 
          className='box__button-submit'
          color='primary'
          sx={submitButton}
          type='submit'
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AuthForm;

