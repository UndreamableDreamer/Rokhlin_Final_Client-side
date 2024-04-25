import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { requestPostsForUser } from '../../redux/actions/users';
import UserPosts from '../../components/UserPosts/UserPosts';
import Status from '../../components/Status/Status';
import Loading from '../../components/Loading/Loading';

const UserPage = memo(() => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentRoute = location.pathname.substring(1);
  const { user, posts, isLoading, error } = useAppSelector((store) => store.user);
  
  useEffect(()=>{
    dispatch(requestPostsForUser(currentRoute));
  },[]);

  if (isLoading) return <Loading />;

  return (
    <> 
      {error !== null && <Status error={error} severity='error' />}
      {(posts.length > 0 && user !== null) && <UserPosts posts={posts} user={user} /> }
      {!error && posts.length === 0 && (
        <Status error={error} severity='info' />
      )}
    </>
  );
});

export default UserPage;
