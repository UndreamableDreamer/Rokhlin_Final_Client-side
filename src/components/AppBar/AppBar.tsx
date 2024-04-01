import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './appbar-module.css';

export default function NavBar() {
  return (
    <Box className='parent__navbar navbar' sx={{ flexGrow: 1 }}>
      <AppBar className='navbar__wrapper wrapper' position="static">
        <Toolbar className='wrapper__toolbar toolbar'>
          <IconButton className='toolbar__icon-button'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='toolbar__title' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button className='toolbar__login-button' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}