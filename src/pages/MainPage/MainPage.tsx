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
  return (
    <>
      {errorMessage && <Status error={errorMessage} severity='error' />}
      {isLoading && <Loading />}
      {posts.length > 0 && (
        <section className='parent'>
          <Posts posts={posts} />
        </section>
      )}
      {!errorMessage && !isLoading && posts.length === 0 && (
        <Status error={errorMessage} severity='info' />
      )}
    </>
  );
};

export default MainPage;
