import { PostsListProps } from "../../components/Posts/Post.props";
import Posts from "../../components/Posts/Post";
import NavBar from "../../components/NavBar/NavBar";

import './MainPage.css'


const MainPage = ({ posts } : PostsListProps) => {
  return (
    <section className="parent">
      <NavBar/>
      <div className="parent__all-news">
      <Posts posts = { posts } />
      </div>
    </section>
  );
};

export default MainPage;