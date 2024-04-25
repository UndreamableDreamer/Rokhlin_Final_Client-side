import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MyPage from './pages/MyPage/MyPage';
import NavBar from './components/AppBar/AppBar';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import ModalAuth from './components/ModalAuth/ModalAuth';
import { authRequestWhoAmI } from './redux/actions/auth';
import { useAppDispatch } from './redux/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(authRequestWhoAmI());
  },[]);
  
  return (
    <>
      <NavBar />
      <ModalAuth />
      <Routes>
        <Route path='/' element = { <MainPage /> } />
        <Route path='/:login' element = { <UserPage /> } />
        <Route path='/myPage' element = { <MyPage /> } />
      </Routes>
    </>
  );
};

export default App;

