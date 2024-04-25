import { Avatar, Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { requestOwnedPostsForUser } from '../../redux/actions/users';
import UserPosts from '../UserPosts/UserPosts';

import { avatar, infoCreated, infoName, metaInfo, profileWrapper } from './styles';
import formatDate from '../../helpers/formatDate';

const Profile = () => {
  const dispatch = useAppDispatch();
  const avatarUrl = useAppSelector((store) => store.auth.user?.avatarUrl);
  
  const { user, posts } = useAppSelector((store) => store.user);

  useEffect(()=>{
    dispatch(requestOwnedPostsForUser());
  },[]);

  return (
    <>
      <Box
        className='profile-wrapper wrapper'
        sx={profileWrapper}
      >
        <Avatar 
          className='wrapper__avatar'
          src={avatarUrl ? avatarUrl: import.meta.env.VITE_FALLBACK_IMAGE}
          sx={avatar}
        />
        <Box
          className='wrapper__meta meta'
          sx={metaInfo}
        >
          <Typography
            className='meta__name'
            sx={infoName}
          >
            Username: {user?.login}
          </Typography>
          <Typography
            className='meta__created-at'
            sx={infoCreated}
          >
            With us since: {formatDate(user?.createdAt)}
          </Typography>
        </Box>
      </Box>
      <UserPosts posts={posts} user={user} />
    </>
  );
};

export default Profile;
