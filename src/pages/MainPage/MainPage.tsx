import { useEffect } from 'react';

import Posts from '../../components/Posts/Posts';
import Status from '../../components/Status/Status';
import Loading from '../../components/Loading/Loading';
import { getAllPosts } from '../../redux/actions/posts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((store)=> store.posts.posts);
  const isLoading = useAppSelector((store)=> store.posts.isLoading);
  const errorMessage = useAppSelector((store)=> store.posts.error);

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
