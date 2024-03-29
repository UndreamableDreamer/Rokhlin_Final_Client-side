import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { value } from "../../redux/reducers/posts/postsReducer";
import { getAllPosts } from "../../redux/actions/action";
import { StoreInterface } from "../../types/types";
import Posts from "../../components/Posts/Post";

import './MainPage.css'


const MainPage = () => {
  const {loading, error, posts} = useSelector((store: StoreInterface)=> store.posts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllPosts(value))
  },[])

  console.log(posts)
  return (
    <section className="parent">
      <div className="parent__all-news">
        <Posts posts={ posts } />
      </div>
    </section>
  );
};

export default MainPage;
