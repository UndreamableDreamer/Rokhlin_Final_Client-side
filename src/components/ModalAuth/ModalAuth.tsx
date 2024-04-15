import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import {
  modalBoxStyles, 
  modalHeaderStyles, 
  registerTextStyles, 
  registerLinkStyles, 
} from './styles';
import AuthForm from '../AuthForm/AuthForm';

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
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        className='toolbar__modal modal'
      >
        <Box className='modal__box box' sx={modalBoxStyles}>
          <Typography 
            className='box__title' 
            id='parent-modal-title' 
            sx={modalHeaderStyles}
          >
            Welcome!
          </Typography>
          <AuthForm />
          {!showAdditionalField && (
            <Typography 
              sx={registerTextStyles}
            >
            Doesn't have an account? <br></br>Register&nbsp;
              <Link 
                onClick={handleNowClick} 
                sx={registerLinkStyles}
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
