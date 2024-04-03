import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../misc/hooks';
import { Error, NoData } from '../../components/Error/Error';
import { getAllPosts } from '../../redux/actions/action';
import Loading from '../../components/Spinner/Loading';
import Posts from '../../components/Posts/Posts';

const MainPage = () => {
  const posts = useAppSelector((store)=> store.posts.posts);
  const isLoading = useAppSelector((store)=> store.posts.isLoading);
  const errorMessage = useAppSelector((store)=> store.posts.error);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getAllPosts());
  },[]);

  switch(true) {
    case(!!errorMessage):
      return <Error error={errorMessage}/>;
    case(!!isLoading):
      return <Loading />;
    case(posts.length > 0):
      return (
        <section className='parent'>
          <Posts posts={posts} />
        </section>
      );
    default:
      return <NoData error={'Nothing to show!'} />;
  }
};

export default MainPage;
