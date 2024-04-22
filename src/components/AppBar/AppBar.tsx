import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

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

  const loggedIn = useAppSelector((store) => store.auth.authorized);

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
          {(loggedIn && <AuthorizedUI />) ||         
            <Button
              onClick={openModal}
              className='toolbar__login'
              color='inherit'
            >
              Login
            </Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
