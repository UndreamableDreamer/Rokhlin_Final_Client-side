import { AccessibleForward } from '@mui/icons-material';
import { Avatar, Button, IconButton } from '@mui/material';

import { authLogout } from '../../redux/actions/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { avatarPlaceholder } from './styles';

const AuthorizedUI = () => {
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
        color='inherit'
      >
        {(!avatarUrl &&
          <AccessibleForward 
            className='placeholder__icon'
          />)
          ||           
          <Avatar
            className='button__image' 
            src={avatarUrl ? avatarUrl: import.meta.env.VITE_FALLBACK_IMAGE}
          /> 
        }
      </IconButton>
    </>
  );
};

export default AuthorizedUI;
