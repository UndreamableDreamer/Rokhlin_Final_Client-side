import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Status } from '../../components/Status/Status';
import { getAllPosts } from '../../redux/actions/action';
import Loading from '../../components/Loading/Loading';
import Posts from '../../components/Posts/Posts';

const MainPage = () => {
  const posts = useAppSelector((store)=> store.posts.posts);
  const isLoading = useAppSelector((store)=> store.posts.isLoading);
  const errorMessage = useAppSelector((store)=> store.posts.error);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getAllPosts());
  },[]);

  if (isLoading) return <Loading />;

  return (
    <>
      {errorMessage !== null && <Status error={errorMessage} severity='error' />}
      {posts.length > 0 && <Posts posts={posts} />}
      {!errorMessage && posts.length === 0 && (
        <Status error={errorMessage} severity='info' />
      )}
    </>
  );
};

export default MainPage;
