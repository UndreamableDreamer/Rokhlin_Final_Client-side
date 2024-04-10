import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

import {
  emailStyles,
  loginStyles, 
  modalBoxStyles, 
  modalHeaderStyles, 
  passwordStyles, 
  register, 
  registerLink, 
  submitButton } from './styles';

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [showAdditionalField, setShowAdditionalField] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShowAdditionalField(false);
  };

  const handleNowClick = () => {
    setShowAdditionalField(true);
  };

  return (
    <>
      <Button 
        onClick={handleOpen} 
        className='toolbar__login' 
        color="inherit"
      >
        LogIn
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        className='toolbar__modal--login modal'
      >
        <Box className='modal__box box' sx={modalBoxStyles}>
          <Typography 
            className='box__title' 
            id='parent-modal-title' 
            sx={modalHeaderStyles}
          >
            Welcome!
          </Typography>
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
          {!showAdditionalField && (
            <Typography 
              sx={register}
            >
            Doesn't have an account? <br></br>Register&nbsp;
              <Link 
                onClick={handleNowClick} 
                sx={registerLink}
              >
              now
              </Link>
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
}
