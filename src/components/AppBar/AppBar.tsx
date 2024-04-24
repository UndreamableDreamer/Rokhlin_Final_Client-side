import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

import AuthorizedUI from '../AuthorizedUI/AuthorizedUI';
import { setModalState } from '../../redux/actions/modal';
import { authErrorNullify } from '../../redux/actions/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { grow, navWrapper, navTitle, navIcon } from './styles';

const NavBar = () => {
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(setModalState(true));
    dispatch(authErrorNullify());
  };

  const isLoggedIn = useAppSelector((store) => store.auth.isAuthorized);

  return (
    <Box className='parent__navbar navbar' sx={grow}> 
      <AppBar className='navbar__wrapper wrapper' sx={navWrapper}>
        <Toolbar className='wrapper__toolbar toolbar'>
          <IconButton 
            className='toolbar__icon-button'
            aria-label="menu"
            sx={navIcon}
          >
            <MenuIcon className='toolbar__icon'/>
          </IconButton>
          <Typography 
            className='toolbar__title' 
            variant="h6" 
            component="div" 
            sx={[grow, navTitle]}>
            News
          </Typography>
          {isLoggedIn ? (
            <AuthorizedUI />
          ) : (
            <Button
              onClick={openModal}
              className='toolbar__login'
              color='inherit'
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
