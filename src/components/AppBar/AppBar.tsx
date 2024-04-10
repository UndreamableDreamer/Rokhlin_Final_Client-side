import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import NestedModal from '../ModalAuth/ModalAuth';

import { grow, navWrapper, navTitle, navIcon } from './styles';

export const NavBar = () => {
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
          <NestedModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

