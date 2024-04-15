import { TextField, Button } from '@mui/material';
import { loginStyles, emailStyles, passwordStyles, submitButton } from './styles';
import React from 'react';

const AuthForm = () => {
  const [open, setOpen] = React.useState(false);
  const [showAdditionalField, setShowAdditionalField] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setShowAdditionalField(false);
  };
  return (
    <>
      <TextField
        className='box__login-field' 
        label='Login' 
        variant='standard' 
        sx={loginStyles}
      >
      </TextField>
      {showAdditionalField && (
        <TextField
          className='box__email-field' 
          label='Email' 
          variant='standard' 
          sx={emailStyles}
        />
      )}
      <TextField 
        className='box__password-field' 
        label='Password' 
        type='password'
        variant='standard'
        sx={passwordStyles}
      >
      </TextField>
      <Button 
        className='box__button-submit' 
        color="primary"
        onClick={handleClose}
        sx={submitButton}
      >
        Submit
      </Button>
    </>
  );
};

export default AuthForm;
