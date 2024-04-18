import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';

import AuthForm from '../AuthForm/AuthForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { nullifyModal, setModalState, setModalToRegister } from '../../redux/actions/modal';

import {
  modalBoxStyles, 
  modalHeaderStyles, 
  registerTextStyles, 
  registerLinkStyles,
  closeButtonStyles, 
} from './styles';

export default function ModalAuth() {
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    dispatch(setModalState(true));
  };
  const handleClose = () => {
    dispatch(nullifyModal());
  };
  const handleNowClick = () => {
    dispatch(setModalToRegister());
  };

  const open = useAppSelector((store) => store.modal.isOpen);
  const modalType = useAppSelector((store) => store.modal.modalType);

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
          <IconButton
            area-label='delete'
            color='error'
            sx={closeButtonStyles}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography 
            className='box__title' 
            id='parent-modal-title' 
            sx={modalHeaderStyles}
          >
            Welcome!
          </Typography>
          <AuthForm />
          {modalType === 'login' && (
            <Typography 
              className='box__register-text'
              sx={registerTextStyles}
            >
            Doesn't have an account? <br></br>Register&nbsp;
              <Link 
                className='box__register-link'
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
