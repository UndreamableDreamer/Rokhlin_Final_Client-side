import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAllPosts } from '../../redux/actions/action';
import { StoreInterface } from '../../types/types';
import Posts from '../../components/Posts/Posts';

import './MainPage.css';

const MainPage = () => {
  const posts = useSelector((store: StoreInterface)=> store.posts.posts);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllPosts());
  },[]);

  return (
    <section className='parent'>
        <Posts posts={posts} />
    </section>
  );
};

export default MainPage;
