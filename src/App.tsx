import { memo } from 'react';
import MainPage from './pages/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';

const App = memo(() => {
  return (
  <>
      <NavBar />
      <MainPage /></>
  );
}
)
export default App;