import NavBar from './components/AppBar/AppBar';
import ModalAuth from './components/ModalAuth/ModalAuth';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <>
      <NavBar />
      <ModalAuth />
      <MainPage />
    </>
  );
};

export default App;
