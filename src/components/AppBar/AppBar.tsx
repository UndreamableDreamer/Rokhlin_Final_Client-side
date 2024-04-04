import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import { grow, navWrapper, navTitle, navIcon } from './app-bar.module';
// redo sx 
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
          <Button className='toolbar__login' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

