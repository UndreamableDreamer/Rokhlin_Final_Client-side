import { AccessibleForward } from '@mui/icons-material';
import { Avatar, Button, IconButton } from '@mui/material';

import { authLogout } from '../../redux/actions/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { avatarPlaceholder } from './styles';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const AuthorizedUI = memo(() => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
  };
  
  const avatarUrl = useAppSelector((store) => store.auth.user?.avatarUrl);

  return (
    <>
      <Button
        onClick={handleLogout}
        className='toolbar__logout'
        color='inherit'
      >
        Logout
      </Button>
      <IconButton
        className='toolbar__avatar-button button'
        sx={avatarPlaceholder}
        component={Link}
        to="/myPage"
        color='inherit'
      >
        {(!avatarUrl &&
          <AccessibleForward 
            className='button__placeholder'
          />)
          ||           
          <Avatar
            className='button__avatar'
            src={avatarUrl ? avatarUrl: import.meta.env.VITE_FALLBACK_IMAGE}
          /> 
        }
      </IconButton>
    </>
  );
});

export default AuthorizedUI;
